import { Tasks, Projects } from "./app-controller";
import { dialog } from "./dialog";
import { PubSub, EV } from "./pubsub";
import { elFactory, htmlFactory, makeFirstUpper, findProjectName } from "./helpers";

const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
sidebarOpenBtn.addEventListener("click", () => sidebar.classList.add("open"));
sidebarCloseBtn.addEventListener("click", () => sidebar.classList.remove("open"));

const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");

const ALL_TASKS = "all-tasks";
const NO_PROJECT = "unsorted";
let currentProject = ALL_TASKS;

function updateScreen() {
	if (currentProject === ALL_TASKS) {
		projectDisplayed.textContent = makeFirstUpper(ALL_TASKS);
		updateTaskColumns(Tasks.getSortedTasks());
		updateSidebar();
	} else {
		projectDisplayed.textContent = makeFirstUpper(currentProject);
		updateTaskColumns(
			Tasks.getSortedTasksBy(
				"project",
				currentProject === NO_PROJECT ? "" : currentProject
			)
		);
		updateSidebar();
	}
	dialog.close();
}

function updateTaskColumns(displayTasks) {
	// Reset the columns
	[...statusesContainer.children].forEach((row) => (row.textContent = ""));

	// Build column content
	displayTasks.forEach((column, index) => {
		const columnName = column[0];
		const statusName = makeFirstUpper(columnName);

		const columnContent = elFactory(
			"section",
			{
				classList: "status-column",
				id: `${columnName}-column`,
			},
			[
				elFactory("h2", {
					classList: "status-name",
					textContent: statusName + ":",
				}),
			]
		);

		// Build task cards
		column[1].forEach((taskContainer) => {
			const task = taskContainer.getProperties();

			columnContent.children.push(
				elFactory(
					"div",
					{
						classList: "task-card id-bubble-marker",
						draggable: true,
						dataset: {
							priority: task.priority.toLowerCase(),
							taskId: task.id,
						},
					},
					[
						elFactory("div", { classList: "card-section" }, [
							elFactory("h3", {
								classList: "title",
								textContent: makeFirstUpper(task.title),
							}),
							elFactory(
								"button",
								{
									type: "button",
									classList: "card-delete-btn",
								},
								[
									elFactory("i", {
										classList: "fa fa-trash-o card-delete-btn",
										"aria-hidden": true,
									}),
								]
							),
						]),
						elFactory("div", { classList: "card-section" }, [
							elFactory("div", {
								classList: "project",
								textContent: makeFirstUpper(task.project),
							}),
							elFactory("div", {
								classList: "due",
								textContent: task.due,
							}),
						]),
					]
				)
			);
		});

		// Append to correct row
		if (index < 2) {
			statusesContainer.firstElementChild.appendChild(
				htmlFactory(columnContent)
			);
		} else {
			statusesContainer.lastElementChild.appendChild(
				htmlFactory(columnContent)
			);
		}
	});

	//Make each status-column able to receive dragDrops
	PubSub.publish(EV.ADD_STATUS_DROP);

	// Make each task clickable and draggable
	document.querySelectorAll(".task-card").forEach((card) => {
		PubSub.publish(EV.ADD_DRAG_DROP, card);
		card.addEventListener("click", (e) => {
			if (e.target.classList.value.includes("card-delete-btn")) {
				PubSub.publish(EV.CARD.DELETE, e, false);
			} else {
				PubSub.publish(EV.CARD.CLICK, e);
			}
		});
	});
}

function updateSidebar() {
	document.querySelector(".projects-container").remove();
	const replacementContainer = elFactory(
		"div",
		{ classList: "projects-container" },
		[ALL_TASKS, NO_PROJECT, ...Projects.getProjects()].map((project) => {
			return elFactory(
				"div",
				{
					classList: "project-name project-bubble-marker",
					dataset: { projectFilter: project },
				},
				[
					elFactory("button", {
						type: "button",
						textContent: makeFirstUpper(project),
						classList: "project-filter-btn",
					}),
					[ALL_TASKS, NO_PROJECT].includes(project)
						? ""
						: elFactory(
								"button",
								{
									type: "button",
									classList: "project-delete-btn",
								},
								[
									elFactory("i", {
										classList: "fa fa-trash",
										"aria-hidden": true,
									}),
								]
						  ),
				]
			);
		})
	);
	document
		.querySelector(".bottom-buttons")
		.before(htmlFactory(replacementContainer));
	document.querySelectorAll(".project-filter-btn").forEach((button) => {
		button.addEventListener("click", filterProjectView);
		if (button.textContent === makeFirstUpper(currentProject)) {
			button.classList.add("selected");
		}
	});
	document.querySelectorAll(".project-delete-btn").forEach((button) => {
		button.addEventListener("click", (e) => {
			const selectedProject = findProjectName(e.target);
			PubSub.publish(EV.WARN.PROJECT_DELETE, selectedProject);
		});
	});
}

function resetCurrentProject(selectedProject) {
	currentProject = selectedProject === currentProject ? ALL_TASKS : currentProject;
}

function filterProjectView(e) {
	currentProject = findProjectName(e.target);
	updateScreen();
	sidebar.classList.remove("open");
}

const subResetProject = PubSub.subscribe(EV.PROJECT.DELETE, resetCurrentProject);

const subInit = PubSub.subscribe(EV.INIT, updateScreen);

const subDeleteTask = PubSub.subscribe(EV.TASK.DELETE, updateScreen);
const subAddTask = PubSub.subscribe(EV.TASK.ADD, updateScreen);
const subUpdateTask = PubSub.subscribe(EV.TASK.UPDATE, updateScreen);

const subAddProject = PubSub.subscribe(EV.PROJECT.ADD, updateScreen);
const subDeleteProject = PubSub.subscribe(EV.PROJECT.DELETE, updateScreen);

const subClearScreen = PubSub.subscribe(EV.RESET.CLEAR_ALL, updateScreen);
