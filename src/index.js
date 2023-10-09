import * as appController from "./app-controller";
import { elFactory, htmlFactory, findTaskId, makeFirstUpper } from "./helpers";
import {
	addDropdowns,
	buildDisplayMode,
	buildEditMode,
	confirmDelete,
	populateDisplay,
	populateForm,
} from "./modals";
import "./style.css";

const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");
const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");

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
				id: `dynamic-${columnName}-column`, //devMode (dynamic)
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

function openDisplayMode(e) {
	buildDisplayMode();
	populateDisplay(findTaskId(e.target));
	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleDelete);
}

function openEditMode(e) {
	document
		.getElementById("edit-btn")
		.removeEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.removeEventListener("click", handleDelete);

	buildEditMode();
	addDropdowns();

	if (e.target.id === "edit-btn") {
		populateForm(findTaskId(e.target));
	}

	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleFormSubmit);
	document
		.getElementById("cancel-btn")
		.addEventListener("click", handleCancel);
}

function handleCancel(e) {
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleFormSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleCancel);

	openDisplayMode(e);
}

function handleDelete(e) {
	confirmDelete(findTaskId(e.target));
}

function handleFormSubmit(e) {
	e.preventDefault();
	console.log("form submitted");
}

/*   PSEUDO

FUNCTION updateSidebar()
	Gets current list.
	Builds DOM elements for each.
END FUNCTION

// Showing the sidebar (mobile)
EVENT LISTENER sidebar-open-btn on click: sidebar.classList.add("open")

// Hiding the sidebar (mobile)
EVENT LISTENER sidebar-close-btn on click: sidebar.classList.remove("open")

// Deleting a task
EVENT LISTENER task-delete-btn on click: handleDelete(targetTask)
FUNCTION handleDelete(targetTask)
	Removes task from list
	closeDialog()
	Updates the screen.
END FUNCTION

// Canceling changes
EVENT LISTENER task-cancel-btn on click: closeDialog()
FUNCTION closeDialog()
	Erases dialog inner content and closes it.
END FUNCTION

// Submitting changes, a new task, or new project
EVENT LISTENER form on submit: handleFormSubmit(e)
FUNCTION handleFormSubmit(e)
	Submits new details to targetTask.
	closeDialog()
	Updates the screen.
END FUNCTION

// Creating a task
EVENT LISTENER add-task-btn on click: openEditMode()

// Creating a project
EVENT LISTENER add-project-btn on click: openProjectMode()
FUNCTION openProjectMode()
	Opens dialog/form with single input.
END FUNCTION

// Deleting a project
EVENT LISTENER .project-delete-btn on click: deleteProject(e)
FUNCTION deleteProject(e)
	Get projectName from e.target.dataset.etc.
	Remove name from project list.
	updateSidebar()
END FUNCTION





 */
// Initial call
updateTaskColumns(appController.Tasks.getAllTasks());

addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
