import { Tasks } from "./app-controller";
import { EVENTS, PubSub } from "./pubsub";

let draggedTask = undefined;

export function addDragDrop(card) {
	card.addEventListener("dragstart", dragStart);
	card.addEventListener("dragend", dragEnd);
}

function dragStart() {
	draggedTask = this;
	console.log("dragStart"); // devMode
}

function dragEnd() {
	draggedTask = undefined;
	console.log("dragEnd"); // devMode
}

export function addStatusDrop(status) {
	status.addEventListener("dragover", dragOver);
	status.addEventListener("dragenter", dragEnter);
	status.addEventListener("dragleave", dragLeave);
	status.addEventListener("drop", dragDrop);
}

function dragOver(e) {
	e.preventDefault();
	// console.log(this.id);
}

function dragEnter() {
	console.log("dragEnter " + this.id); // devMode
}

function dragLeave() {
	console.log("dragLeave " + this.id); // devMode
}

function dragDrop() {
	const dropColumn = this.id.slice(0, -7);
	const draggedId = +draggedTask.dataset.taskId;
	const task = Tasks.getTasksBy("id", draggedId)[0].getProperties();
	task.status = dropColumn;

	PubSub.publish(EVENTS.UPDATE_TASK, draggedId, Object.entries(task));
}
