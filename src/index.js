import { PubSub, EVENTS } from "./pubsub";
import { Tasks } from "./app-controller";
import { findTaskId, makeFirstUpper } from "./helpers";
import { dialog } from "./modals";
import "./style.css";
import "./web-storage";
import "./screenController";

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

	addTaskBtn.addEventListener("click", openEditMode);
	addProjectBtn.addEventListener("click", openProjectMode);

	storageRevealBtn.addEventListener("click", () => {
		storageRevealBtn.classList.toggle("open");
		defaultsBtn.classList.toggle("open");
		clearStorageBtn.classList.toggle("open");

		hideAddBtns();
	});

	defaultsBtn.addEventListener("click", () => {
		PubSub.publish(EVENTS.ADD_DEFAULTS, true);
	});
	clearStorageBtn.addEventListener("click", () => {
		const userConfirmed = confirm(
			"Are you sure you want to delete all tasks AND projects? \nThis action cannot be undone."
		);

		if (userConfirmed) {
			PubSub.publish(EVENTS.CLEAR_ALL);
		}
	});

	function hideAddBtns() {
		addRevealBtn.classList.remove("open");
		addTaskBtn.classList.remove("open");
		addProjectBtn.classList.remove("open");
	}

	const subAddDisplay = PubSub.subscribe(EVENTS.DISPLAY_MODE, hideAddBtns);
	const subAddEdit = PubSub.subscribe(EVENTS.EDIT_MODE, hideAddBtns);
	const subAddProject = PubSub.subscribe(EVENTS.PROJECT_MODE, hideAddBtns);

	function hideStorageBtns() {
		storageRevealBtn.classList.remove("open");
		defaultsBtn.classList.remove("open");
		clearStorageBtn.classList.remove("open");
	}

	const subStorDefaults = PubSub.subscribe(EVENTS.ADD_DEFAULTS, hideStorageBtns);
	const subStorClearAll = PubSub.subscribe(EVENTS.CLEAR_ALL, hideStorageBtns);
	const subStorDisplay = PubSub.subscribe(EVENTS.DISPLAY_MODE, hideStorageBtns);

	return { addTaskBtn };
})();

function openDisplayMode(e) {
	PubSub.publish(EVENTS.DISPLAY_MODE, findTaskId(e.target));

	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleTaskDelete);
}

function openEditMode(e) {
	if (e.target !== BottomBtns.addTaskBtn) {
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
	const task = Tasks.getTasksBy("id", selectedId)[0].getProperties();

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
