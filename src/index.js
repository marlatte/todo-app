import * as appController from "./app-controller";
import { elFactory, htmlFactory } from "./dom-factories";
import "./style.css";

const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");
const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const dialog = document.querySelector("dialog");

let currentDisplayTasks = appController.Tasks.getAllTasks();

currentDisplayTasks.forEach((column) => {
	const columnName = column[0];
	const statusName = columnName
		.split("-")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");

	const columnContent = elFactory("div", { classList: "status-container" }, [
		elFactory("h2", {
			classList: "status-name",
			textContent: statusName,
		}),
	]);

	column[1].forEach((task) => {
		columnContent.children.push(
			elFactory("div", {
				classList: "task-card",
				dataset: {
					priority: task.getProperty("priority"),
					taskId: task.getProperty("id"),
				},
			})
		);
	});

	// Replace by grabbing (and renaming) statusesContainer and
	// deciding which status-row to append it to based on index.
	// Use firstElementChild, etc.
	document
		.getElementById(`${columnName}-column`)
		.appendChild(htmlFactory(columnContent));
});

/*   PSEUDO

LET {currentDisplayTasks}: whatever will be displayed on screen. 
	Will need to be updated by other FN's.

FUNCTION updateTaskColumns()
	Sorts {currentDisplayTasks} by column, 
	Calls elFactory/htmlFactory, appends them to appropriate column.
	Adds event listeners
END FUNCTION 

FUNCTION updateSidebar()
	Gets current list.
	Builds DOM elements for each.
END FUNCTION

// Showing the sidebar (mobile)
EVENT LISTENER sidebar-open-btn on click: sidebar.classList.add("open")

// Hiding the sidebar (mobile)
EVENT LISTENER sidebar-close-btn on click: sidebar.classList.remove("open")

// Opening displayMode
EVENT LISTENER any task on click: openDisplayMode(targetTask)
FUNCTION openDisplayMode(targetTask)
	Gets targetTask's info and displays it in full displayMode.
	Adds event listeners for buttons.
END FUNCTION

// Opening editMode
EVENT LISTENER edit-btn on click: openEditMode(targetTask)
FUNCTION openEditMode(targetTask)
	Builds a form in <dialog>.
	IF (targetTask)
		Gets targetTask info and sets form input values.
	END IF
	Adds event listeners for editMode buttons.
	Removes event listeners for displayMode buttons.
END FUNCTION

// Deleting a task
EVENT LISTENER task-delete-btn on click: deleteTask(targetTask)
FUNCTION deleteTask(targetTask)
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

const screenController = (() => {
	const addBtn = document.getElementById("add-btn");
	addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
})();
