import { elFactory, formatDate, htmlFactory, makeFirstUpper } from "./helpers";
import { Tasks, Projects } from "./app-controller";
import { PubSub, EVENTS } from "./pubsub";

export const dialog = document.querySelector("dialog");
document.addEventListener("click", (e) => {
	if (e.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
	dialog.textContent = "";
});

function buildDisplayMode() {
	dialog.innerHTML = `
			<div class="display-mode">
				<section class="display-mode-header">
					<h3 id="display-title"></h3>
					<button class="close-btn display-close-btn">×</button>
				</section>
				<section class="display-mode-details">
					<p>Project: <span id="display-project"></span></p>
					<p>Priority: <span id="display-priority"></span></p>
					<p>Due: <span id="display-due"></span></p>
					<p>Status: <span id="display-status"></span></p>
					<p>Notes:<span id="display-notes"></span></p>
					<p>Tags: <span id="display-tags"></span></p>
				</section>
				<section class="display-mode-buttons id-bubble-marker" data-task-id="">
					<button type="button" id="edit-btn">Edit</button>
					<button type="button" id="delete-btn">Delete</button>
				</section>
			</div>
	`;
	dialog.showModal();
}

function populateDisplay(selectedId) {
	const task = Tasks.getTasksBy("id", selectedId)[0].getProperties();
	Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(`display-${prop}`);
		let output = task[prop];

		if (prop === "due" && !!output) {
			output = formatDate(output);
		}
		element.textContent = prop === "tags" ? output : makeFirstUpper(output);
	});
	dialog.querySelector(".id-bubble-marker").dataset.taskId = selectedId;
	dialog
		.querySelector(".display-close-btn")
		.addEventListener("click", () => dialog.close());
}

function buildEditMode() {
	dialog.innerHTML = `<form class="edit-mode" method="dialog">
				<section class="edit-mode-details">
					<div class="form-row">
						<div class="form-item">
							<label for="title">Title:</label>
							<input type="text" id="title" class="submit-info" required />
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="project">Project:</label>
							<select id="project" class="submit-info">
								<option value=""></option>
							</select>
						</div>
						<div class="form-item">
							<label for="priority">Priority:</label>
							<select id="priority" class="submit-info">
								<option value=""></option>
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="due">Due:</label>
							<input type="date" id="due" class="submit-info"/>
						</div>
						<div class="form-item">
							<label for="status">Status:</label>
							<select id="status" class="submit-info" required></select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="notes">Notes:</label>
							<textarea id="notes" cols="30" rows="10" class="submit-info"></textarea>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<p>Enter tags separated by commas.</p>
							<label for="tags">Tags:</label>
							<input type="text" id="tags" class="submit-info"/>
						</div>
					</div>
				</section>
				<section class="edit-mode-buttons id-bubble-marker" data-task-id="">
					<button type="submit" id="save-btn">Save</button>
					<button type="button" id="cancel-btn">Cancel</button>
				</section>
			</form>`;
	dialog.showModal();
}

function addDropdowns() {
	[
		["project", Projects.getProjects()],
		["priority", Tasks.getPriorityNames()],
		["status", Tasks.getColumnNames()],
	].forEach((pair) => {
		const element = document.getElementById(pair[0]);
		pair[1].forEach((option) => {
			element.appendChild(
				htmlFactory(
					elFactory("option", {
						value: option,
						textContent: makeFirstUpper(option),
					})
				)
			);
		});
	});
}

function populateForm(selectedId) {
	const task = Tasks.getTasksBy("id", selectedId)[0].getProperties();
	Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(prop);

		switch (prop) {
			case "project":
			case "priority":
			case "status":
				[...element.children].forEach((option) => {
					option.selected = option.value === task[prop];
				});
				break;
			case "title":
				element.value = makeFirstUpper(task[prop]);
				break;

			case "notes":
				element.textContent = makeFirstUpper(task[prop]);
				break;

			default:
				element.value = task[prop];
				break;
		}
	});
	dialog.querySelector(".id-bubble-marker").dataset.taskId = selectedId;
}

function buildProjectMode() {
	dialog.innerHTML = `
		<form class="project-mode">
			<div class="form-item">
				<label for="new-project">New Project:</label>
				<input type="text" id="new-project" required/>
			</div>
			<section class="project-mode-buttons">
				<button type="submit" id="project-save-btn">Submit</button>
				<button type="button" id="project-cancel-btn">
					Cancel
				</button>
			</section>
		</form>`;
	dialog.showModal();
}

const subDisplayBuild = PubSub.subscribe(EVENTS.DISPLAY_MODE, buildDisplayMode);
const subDisplayPop = PubSub.subscribe(EVENTS.DISPLAY_MODE, populateDisplay);

const subEditBuild = PubSub.subscribe(EVENTS.EDIT_MODE, buildEditMode);
const subEditDropdowns = PubSub.subscribe(EVENTS.EDIT_MODE, addDropdowns);
const subFormPop = PubSub.subscribe(EVENTS.EDIT_MODE_POP, populateForm);

const subProjectBuild = PubSub.subscribe(EVENTS.PROJECT_MODE, buildProjectMode);
