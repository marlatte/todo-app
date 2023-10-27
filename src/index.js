import { PubSub, EV } from "./pubsub";
import { Tasks } from "./app-controller";
import { findTaskId } from "./helpers";
import { dialog } from "./dialog";
import "./styles/style.css";
import "./web-storage";
import "./screenController";
import "./drag-drop";
import "./warnings";

const BottomBtns = (() => {
	const addRevealBtn = document.getElementById("add-reveal-btn");
	const addTaskBtn = document.getElementById("add-task-btn");
	const addProjectBtn = document.getElementById("add-project-btn");

	const storageRevealBtn = document.getElementById("storage-reveal-btn");
	const defaultsBtn = document.getElementById("defaults-btn");
	const clearStorageBtn = document.getElementById("clear-storage-btn");

	addRevealBtn.addEventListener("click", () => {
		addRevealBtn.classList.toggle("open");
		addTaskBtn.classList.toggle("open");
		addProjectBtn.classList.toggle("open");
		hideStorageBtns();
	});

	addTaskBtn.addEventListener("click", checkEditMode);
	addProjectBtn.addEventListener("click", openProjectMode);

	storageRevealBtn.addEventListener("click", () => {
		storageRevealBtn.classList.toggle("open");
		defaultsBtn.classList.toggle("open");
		clearStorageBtn.classList.toggle("open");
		hideAddBtns();
	});

	defaultsBtn.addEventListener("click", () => {
		PubSub.publish(EV.WARN.DEFAULTS);
	});

	clearStorageBtn.addEventListener("click", () => {
		PubSub.publish(EV.WARN.CLEAR_ALL);
	});

	function hideAddBtns() {
		addRevealBtn.classList.remove("open");
		addTaskBtn.classList.remove("open");
		addProjectBtn.classList.remove("open");
	}

	function hideStorageBtns() {
		storageRevealBtn.classList.remove("open");
		defaultsBtn.classList.remove("open");
		clearStorageBtn.classList.remove("open");
	}

	const subAddDisplay = PubSub.subscribe(EV.DIALOG.DISPLAY_MODE, hideAddBtns);
	const subAddEdit = PubSub.subscribe(EV.DIALOG.EDIT_MODE, hideAddBtns);
	const subAddProject = PubSub.subscribe(EV.DIALOG.PROJECT_MODE, hideAddBtns);
	const subStorDefaults = PubSub.subscribe(EV.RESET.ADD_DEFAULTS, hideStorageBtns);
	const subStorClearAll = PubSub.subscribe(EV.RESET.CLEAR_ALL, hideStorageBtns);
	const subStorDisplay = PubSub.subscribe(EV.DIALOG.DISPLAY_MODE, hideStorageBtns);

	return { addTaskBtn };
})();

function openDisplayMode(selectedId) {
	PubSub.publish(EV.DIALOG.DISPLAY_MODE, selectedId);

	document.getElementById("edit-btn").addEventListener("click", checkEditMode);
	document.getElementById("delete-btn").addEventListener("click", (e) => {
		handleTaskDelete(e, true);
	});
}

function checkEditMode(e) {
	// Check if opened from displayMode
	if (e.target !== BottomBtns.addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", checkEditMode);
		document
			.getElementById("delete-btn")
			.removeEventListener("click", handleTaskDelete);

		const task = Tasks.getTasksBy("id", findTaskId(e.target))[0].getProperties();
		openEditMode(task);
	} else {
		openEditMode();
	}
}

function openEditMode(task) {
	PubSub.publish(EV.DIALOG.EDIT_MODE);
	if (!!task) {
		PubSub.publish(EV.DIALOG.EDIT_MODE_POP, task);
	}

	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.addEventListener("click", handleTaskCancel);
}

function openProjectMode() {
	PubSub.publish(EV.DIALOG.PROJECT_MODE);

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
	const taskId = findTaskId(e.target);
	if (!!taskId) {
		openDisplayMode(taskId);
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

function handleTaskDelete(e, reopenDialog) {
	const selectedId = findTaskId(e.target);
	const task = Tasks.getTasksBy("id", selectedId)[0].getProperties();
	dialog.close();
	PubSub.publish(EV.WARN.TASK_DELETE, selectedId, task.title, reopenDialog);
}

function getValuesArray() {
	const submittedInfo = [];
	document.querySelectorAll(".submit-info").forEach((el) => {
		let submitValue = {
			input: el.value,
			select: [...el.children].filter((option) => option.selected === true)[0]
				?.value,
			textarea: el.textContent,
		}[el.tagName.toLowerCase()];
		submittedInfo.push([el.id, submitValue]);
	});
	return submittedInfo;
}

function handleTaskSubmit(e) {
	e.preventDefault();
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);
	dialog.close();
	const submitId = findTaskId(document.getElementById("save-btn"));
	const valuesArray = getValuesArray();
	PubSub.publish(EV.WARN.TASK_SUBMIT, submitId, valuesArray);
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	PubSub.publish(EV.PROJECT.ADD, newProjectName);
}

const subCardClick = PubSub.subscribe(EV.INDEX.CARD_CLICK, openDisplayMode);
const subCardDelete = PubSub.subscribe(EV.INDEX.CARD_DELETE, handleTaskDelete);
const subReopenEdit = PubSub.subscribe(EV.INDEX.REOPEN_EDIT, openEditMode);
PubSub.publish(EV.INIT);
