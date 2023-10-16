import * as appController from "./app-controller";
import {
	elFactory,
	htmlFactory,
	findTaskId,
	makeFirstUpper,
	findProjectName,
} from "./helpers";
import { dialog } from "./modals";
import "./style.css";
import { PubSub, EVENTS } from "./pubsub";

const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
sidebarOpenBtn.addEventListener("click", () => sidebar.classList.add("open"));
sidebarCloseBtn.addEventListener("click", () =>
	sidebar.classList.remove("open")
);

const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");

const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");

addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
addTaskBtn.addEventListener("click", () => {
	// document
	// 	.getElementById("edit-btn")
	// 	.removeEventListener("click", openEditMode);
	// document
	// 	.getElementById("delete-btn")
	// 	.removeEventListener("click", handleTaskDelete);
	PubSub.publish(EVENTS.EDIT_MODE);
});
addProjectBtn.addEventListener("click", openProjectMode);

const ALL_TASKS = "all-tasks";
let currentProject = ALL_TASKS;

function openProjectMode() {
	addBtn.classList.toggle("open");
	buildProjectMode();
	//add event listeners
	document
		.querySelector(".project-mode")
		.addEventListener("submit", handleProjectSubmit);
	document
		.getElementById("project-cancel-btn")
		.addEventListener("click", handleProjectCancel);
}

function handleTaskCancel(e) {
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);

	if (findTaskId(e.target)) {
		openDisplayMode(e);
	} else {
		dialog.close();
	}
}

function handleProjectCancel() {
	document
		.querySelector(".project-mode")
		.removeEventListener("submit", handleProjectSubmit);
	document
		.getElementById("project-cancel-btn")
		.removeEventListener("click", handleProjectCancel);

	dialog.close();
}

function confirmDeleteTask(selectedId) {
	const task = appController.Tasks.getTasksByProperty(
		"id",
		selectedId
	)[0].getProperties();

	const userConfirmed = confirm(
		`Are you sure you want to delete the "${makeFirstUpper(
			task.title
		)}" task? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		PubSub.publish(EVENTS.DELETE_TASK, selectedId);
		updateScreen();
	}
}

const subConfirmDeleteTask = PubSub.subscribe(
	EVENTS.CONFIRM_DELETE_TASK,
	confirmDeleteTask
);

function handleProjectDelete(e) {
	const selectedProject = findProjectName(e.target);

	const userConfirmed = confirm(
		`Are you sure you want to delete "${makeFirstUpper(
			selectedProject
		)}" and all its tasks? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		appController.Projects.removeProject(selectedProject);
		currentProject =
			selectedProject === currentProject ? ALL_TASKS : currentProject;
		updateScreen();
	}
}

function getValuesArray() {
	const submittedInfo = [];
	document.querySelectorAll(".submit-info").forEach((el) => {
		let submitValue = {
			input: el.value,
			select: [...el.children].filter(
				(option) => option.selected === true
			)[0]?.value,
			textarea: el.textContent,
		}[el.tagName.toLowerCase()];
		submittedInfo.push([el.id, submitValue]);
	});
	return submittedInfo;
}

function submitTask(submitId) {
	// document
	// 	.querySelector(".edit-mode")
	// 	.removeEventListener("submit", handleTaskSubmit);
	// document
	// 	.getElementById("cancel-btn")
	// 	.removeEventListener("click", handleTaskCancel);

	const userConfirmed = confirm(
		`Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`
	);

	if (userConfirmed) {
		const valuesArray = getValuesArray();
		if (submitId === 0) {
			PubSub.publish(EVENTS.ADD_TASK, valuesArray);
		} else {
			PubSub.publish(EVENTS.UPDATE_TASK, submitId, valuesArray);
		}
		dialog.close();
		updateScreen();
	}
}

const subSubmitTask = PubSub.subscribe(EVENTS.SUBMIT_TASK, submitTask);

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	appController.Projects.addProject(newProjectName);
	updateScreen();
}

function updateScreen() {
	if (currentProject === ALL_TASKS) {
		projectDisplayed.textContent = makeFirstUpper(ALL_TASKS);
		updateTaskColumns(appController.Tasks.getAllTasks());
		updateSidebar();
	} else {
		projectDisplayed.textContent = makeFirstUpper(currentProject);
		updateTaskColumns(
			appController.Tasks.getSortedTasksByProperty(
				"project",
				currentProject
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
					textContent: statusName,
				}),
			]
		);

		// Build task cards
		column[1].forEach((task) => {
			const [title, project, due] = [
				task.getProperty("title"),
				task.getProperty("project"),
				task.getProperty("due"),
			];
			columnContent.children.push(
				elFactory(
					"div",
					{
						classList: "task-card id-bubble-marker",
						dataset: {
							priority: task
								.getProperty("priority")
								.toLowerCase(),
							taskId: task.getProperty("id"),
						},
					},
					[
						elFactory("div", {
							classList: "title",
							textContent: makeFirstUpper(title),
						}),
						elFactory("div", { classList: "subtext" }, [
							elFactory("div", {
								classList: "project",
								textContent: makeFirstUpper(project),
							}),
							elFactory("div", {
								classList: "due",
								textContent: due,
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
			PubSub.publish(EVENTS.DISPLAY_MODE, findTaskId(e.target));
		});
	});
}

function updateSidebar() {
	document.querySelector(".projects-container").remove();
	const replacementContainer = elFactory(
		"div",
		{ classList: "projects-container" },
		[ALL_TASKS, ...appController.Projects.getProjects()].map((project) => {
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
					project === ALL_TASKS
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

	sidebar.appendChild(htmlFactory(replacementContainer));
	document.querySelectorAll(".project-filter-btn").forEach((button) => {
		button.addEventListener("click", filterProjectView);
	});
	document.querySelectorAll(".project-delete-btn").forEach((button) => {
		button.addEventListener("click", handleProjectDelete);
	});
}

function filterProjectView(e) {
	currentProject = findProjectName(e.target);
	updateScreen();
	sidebar.classList.remove("open");
}

function closeAddBtn() {
	addBtn.classList.remove("open");
}

const subDisplayCloseAddBtn = PubSub.subscribe(
	EVENTS.DISPLAY_MODE,
	closeAddBtn
);
const subEditCloseAddBtn = PubSub.subscribe(EVENTS.EDIT_MODE, closeAddBtn);
const subProjectCloseAddBtn = PubSub.subscribe(
	EVENTS.PROJECT_MODE,
	closeAddBtn
);

// Initial call
updateScreen();
