import * as appController from "./app-controller";
import {
	elFactory,
	htmlFactory,
	findTaskId,
	makeFirstUpper,
	findProjectName,
} from "./helpers";
import {
	addDropdowns,
	buildDisplayMode,
	buildEditMode,
	buildProjectMode,
	dialog,
	getValuesArray,
	populateDisplay,
	populateForm,
} from "./modals";
import "./style.css";

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
addTaskBtn.addEventListener("click", openEditMode);
addProjectBtn.addEventListener("click", openProjectMode);

const ALL_TASKS = "all-tasks";
let currentProject = ALL_TASKS;

function openDisplayMode(e) {
	addBtn.classList.remove("open");
	buildDisplayMode();
	populateDisplay(findTaskId(e.target));
	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleTaskDelete);
}

function openEditMode(e) {
	if (e.target !== addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", openEditMode);
		document
			.getElementById("delete-btn")
			.removeEventListener("click", handleTaskDelete);
	}

	addBtn.classList.remove("open");

	buildEditMode();
	addDropdowns();

	if (e.target.id === "edit-btn") {
		populateForm(findTaskId(e.target));
	}

	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.addEventListener("click", handleTaskCancel);
}

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

function handleTaskDelete(e) {
	const selectedId = findTaskId(e.target);
	const task = appController.Tasks.getTasksByProperty("id", selectedId)[0];

	const userConfirmed = confirm(
		`Are you sure you want to delete the "${makeFirstUpper(
			task.getProperty("title")
		)}" task? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		console.log(selectedId);
		appController.Tasks.removeTasks(selectedId);
		updateScreen();
	}
}

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

function handleTaskSubmit(e) {
	e.preventDefault();
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);

	const submitId = findTaskId(document.getElementById("save-btn"));
	const userConfirmed = confirm(
		`Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`
	);

	if (userConfirmed) {
		const valuesArray = getValuesArray();
		if (submitId === 0) {
			appController.Tasks.addTask(valuesArray);
		} else {
			appController.Tasks.updateTask(submitId, valuesArray);
		}
		dialog.close();
		updateScreen();
	}
}

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
								classList: "date",
								textContent: due ? due : "(date)",
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
		card.addEventListener("click", openDisplayMode);
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

// Initial call
updateScreen();
