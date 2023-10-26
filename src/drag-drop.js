import { Tasks } from "./app-controller";
import { findStatus } from "./helpers";
import { EVENTS, PubSub } from "./pubsub";

let draggedTask = undefined;
let counter = 0;

function addDragDrop(card) {
	card.addEventListener("dragstart", dragStart);
	card.addEventListener("dragend", dragEnd);
}

function dragStart(e) {
	draggedTask = this;
	this.style.opacity = "0.4";
}

function dragEnd(e) {
	draggedTask = undefined;
	this.style.opacity = "1";
	counter = 0;
	document.querySelectorAll(".status-column").forEach((status) => {
		status.classList.remove("drag-over");
	});
}

function addStatusDrop() {
	document.querySelectorAll(".status-column").forEach((status) => {
		status.addEventListener("dragover", dragOver);
		status.addEventListener("drop", updateStatus);
		status.addEventListener("dragenter", dragEnter);
		status.addEventListener("dragleave", dragLeave);
	});
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter() {
	counter++;
	findStatus(this).classList.add("drag-over");
}

function dragLeave() {
	counter--;
	if (counter === 0) {
		findStatus(this).classList.remove("drag-over");
	}
}

function updateStatus() {
	const dropColumn = findStatus(this).id.slice(0, -7);
	const draggedId = +draggedTask.dataset.taskId;
	const task = Tasks.getTasksBy("id", draggedId)[0].getProperties();
	task.status = dropColumn;

	PubSub.publish(EVENTS.UPDATE_TASK, draggedId, Object.entries(task));
}

const subDragDrop = PubSub.subscribe(EVENTS.ADD_DRAG_DROP, addDragDrop);
const subStatusDrop = PubSub.subscribe(EVENTS.ADD_STATUS_DROP, addStatusDrop);
