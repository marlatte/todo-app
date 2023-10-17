import * as appController from "./app-controller";
import { findTaskId, makeFirstUpper } from "./helpers";
import { dialog } from "./modals";
import "./style.css";
import { PubSub, EVENTS } from "./pubsub";
import "./screenController";

const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");

addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
addTaskBtn.addEventListener("click", openEditMode);
addProjectBtn.addEventListener("click", openProjectMode);

function openDisplayMode(e) {
	addBtn.classList.remove("open");

	PubSub.publish(EVENTS.DISPLAY_MODE, findTaskId(e.target));

	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleTaskDelete);
}

function openEditMode(e) {
	addBtn.classList.remove("open");
	if (e.target !== addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", openEditMode);
		document
			.getElementById("delete-btn")
			.removeEventListener("click", handleTaskDelete);
	}

	PubSub.publish(EVENTS.EDIT_MODE);

	if (e.target.id === "edit-btn") {
		PubSub.publish(EVENTS.EDIT_MODE_POP, findTaskId(e.target));
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

	PubSub.publish(EVENTS.PROJECT_MODE);

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

function handleTaskSubmit(e) {
	e.preventDefault();
	const submitId = findTaskId(document.getElementById("save-btn"));
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);

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
	}
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	PubSub.publish(EVENTS.ADD_PROJECT, newProjectName);
}

const subCardClick = PubSub.subscribe(EVENTS.CARD_CLICK, openDisplayMode);

PubSub.publish(EVENTS.INIT);
