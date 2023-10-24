import { Tasks, Projects } from "./app-controller";
import { dialog } from "./modals";
import { PubSub, EVENTS } from "./pubsub";
import { elFactory, htmlFactory, makeFirstUpper, findProjectName } from "./helpers";

const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
sidebarOpenBtn.addEventListener("click", () => sidebar.classList.add("open"));
sidebarCloseBtn.addEventListener("click", () => sidebar.classList.remove("open"));

const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");

const ALL_TASKS = "all-tasks";
const NO_PROJECT = "uncategorized";
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

	// Make each task clickable
	const TaskCards = document.querySelectorAll(".task-card");
	TaskCards.forEach((card) => {
		card.addEventListener("click", (e) => {
			if (e.target.classList.value.includes("card-delete-btn")) {
				PubSub.publish(EVENTS.CARD_DELETE, e);
			} else {
				PubSub.publish(EVENTS.CARD_CLICK, e);
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
					classList: "project-name id-bubble-marker",
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
						: elFactory("button", {
								type: "button",
								textContent: "D",
								classList: "project-delete-btn",
						  }),
				]
			);
		})
	);
	document
		.querySelector(".bottom-buttons")
		.before(htmlFactory(replacementContainer));
	document.querySelectorAll(".project-filter-btn").forEach((button) => {
		button.addEventListener("click", filterProjectView);
	});
	document.querySelectorAll(".project-delete-btn").forEach((button) => {
		button.addEventListener("click", handleProjectDelete);
	});
}

function handleProjectDelete(e) {
	const selectedProject = findProjectName(e.target);

	const userConfirmed = confirm(
		`Are you sure you want to delete "${makeFirstUpper(
			selectedProject
		)}" and all its tasks? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		PubSub.publish(EVENTS.DELETE_PROJECT, selectedProject);
		currentProject =
			selectedProject === currentProject ? ALL_TASKS : currentProject;
		updateScreen();
	}
}

function filterProjectView(e) {
	currentProject = findProjectName(e.target);
	updateScreen();
	sidebar.classList.remove("open");
}

const subInit = PubSub.subscribe(EVENTS.INIT, updateScreen);

const subDeleteTask = PubSub.subscribe(EVENTS.DELETE_TASK, updateScreen);
const subAddTask = PubSub.subscribe(EVENTS.ADD_TASK, updateScreen);
const subUpdateTask = PubSub.subscribe(EVENTS.UPDATE_TASK, updateScreen);

const subAddProject = PubSub.subscribe(EVENTS.ADD_PROJECT, updateScreen);

const subClearScreen = PubSub.subscribe(EVENTS.CLEAR_ALL, updateScreen);
