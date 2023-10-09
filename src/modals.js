import {
	elFactory,
	formRowFactory,
	htmlFactory,
	makeFirstUpper,
} from "./helpers";
import * as appController from "./app-controller";

const dialog = document.querySelector("dialog");

export function buildDisplayMode(selectedId) {
	dialog.innerHTML = `
			<div class="display-mode">
				<section class="display-mode-header">
					<h3 id="display-title"></h3>
					<button class="close-btn">×</button>
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

export function populateDisplay(selectedId) {
	const task = appController.Tasks.getTasksByProperty("id", +selectedId)[0];
	appController.Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(`display-${prop}`);
		let output = task.getProperty(prop);

		if (prop === "due") {
			const date = new Date(output);
			const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			output = `${days[date.getDay()]}`;
		}
		element.textContent = prop === "tags" ? output : makeFirstUpper(output);
	});
}

// export function buildDisplayMode(selectedId) {
// 	const task = appController.Tasks.getTasksByProperty("id", +selectedId)[0];

// 	// Returns nested elFactories to append to dialog
// 	return htmlFactory(
// 		elFactory("div", { classList: "display-mode" }, [
// 			elFactory("section", { classList: "display-mode-header" }, [
// 				elFactory("h3", {
// 					classList: "display-title",
// 					textContent: task.getProperty("title"),
// 				}),
// 				elFactory("button", {
// 					type: "button",
// 					classList: "close-btn",
// 					textContent: "×",
// 				}),
// 			]),
// 			elFactory(
// 				"section",
// 				{ classList: "display-mode-details" },
// 				// Add details!!!!
// 				[
// 					"project",
// 					"priority",
// 					"due-date",
// 					"status",
// 					"notes",
// 					"tags",
// 				].map((prop) => {
// 					return elFactory(
// 						"p",
// 						{
// 							textContent: `${makeFirstUpper(prop)}: `,
// 						},
// 						[
// 							elFactory("span", {
// 								classList: `display-${prop}`,
// 								textContent: task.getProperty(prop),
// 							}),
// 						]
// 					);
// 				})
// 			),
// 			elFactory(
// 				"section",
// 				{
// 					classList: "display-mode-buttons id-bubble-marker",
// 					dataset: { taskId: selectedId },
// 				},
// 				[
// 					elFactory("button", {
// 						type: "button",
// 						id: "edit-btn",
// 						textContent: "Edit",
// 					}),
// 					elFactory("button", {
// 						type: "button",
// 						id: "delete-btn",
// 						textContent: "Delete",
// 					}),
// 				]
// 			),
// 		])
// 	);
// }

// export function buildEditMode(selectedId = "") {
// 	// Builds a form, adds relevant task info IF an id is supplied
// 	const task = selectedId
// 		? appController.Tasks.getTasksByProperty("id", +selectedId)[0]
// 		: { getProperty: (prop) => "" };

// 	const titleRow = formRowFactory([
// 		["input", "Title", task.getProperty("title"), "text"],
// 	]);

// 	const middleRows = formRowFactory([
// 		[
// 			"select",
// 			"Project",
// 			task.getProperty("project"),
// 			appController.Projects.getProjects(),
// 		],
// 		[
// 			"select",
// 			"Priority",
// 			task.getProperty("priority"),
// 			["high", "medium", "low"],
// 		],
// 		["input", "Due Date", task.getProperty("dueDate"), "date"],
// 		[
// 			"select",
// 			"Status",
// 			task.getProperty("status"),
// 			appController.Tasks.getColumnNames(),
// 		],
// 		["textarea", "Notes", task.getProperty("notes")],
// 	]);

// 	const tagsRow = formRowFactory([
// 		["input", "Tags", task.getProperty("tags"), "text"],
// 	]);

// 	tagsRow[0].children[0].children.unshift(
// 		elFactory("p", { textContent: "Enter tags separated by commas." })
// 	);

// 	return htmlFactory(
// 		elFactory("div", { classList: "edit-mode" }, [
// 			elFactory("section", { classList: "edit-mode-details" }, [
// 				...titleRow,
// 				...middleRows,
// 				...tagsRow,
// 			]),
// 			elFactory(
// 				"section",
// 				{
// 					classList: "edit-mode-buttons id-bubble-marker",
// 					dataset: { taskId: selectedId },
// 				},
// 				[
// 					elFactory("button", {
// 						type: "submit",
// 						id: "save-btn",
// 						textContent: "Save",
// 					}),
// 					elFactory("button", {
// 						type: "button",
// 						id: "cancel-btn",
// 						textContent: "Cancel",
// 					}),
// 				]
// 			),
// 		])
// 	);
// }

export function buildEditMode() {
	dialog.innerHTML = `<form class="edit-mode">
				<section class="edit-mode-details">
					<div class="form-row">
						<div class="form-item">
							<label for="title">Title:</label>
							<input
								type="text"
								id="title"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="project">Project:</label>
							<select id="project">
								<option value=""></option>
								<!-- Add options here -->
							</select>
						</div>
						<div class="form-item">
							<label for="priority">Priority:</label>
							<select id="priority">
								<option value=""></option>
								<!-- Add options here -->
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="due">Due:</label>
							<input type="date" id="due" />
						</div>
						<div class="form-item">
							<label for="status">Status:</label>
							<select id="status" required>
								<!-- Add options here -->
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="notes">Notes:</label>
							<textarea id="notes" cols="30" rows="10"></textarea>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<p>Enter tags separated by commas.</p>
							<label for="tags">Tags:</label>
							<input type="text" id="tags" />
						</div>
					</div>
				</section>
				<section class="edit-mode-buttons id-bubble-marker" data-task-id="">
					<button type="submit" id="static-save-btn">Save</button>
					<button type="button" id="static-cancel-btn">Cancel</button>
				</section>
			</form>`;
}

export function addDropdowns() {
	[
		["project", appController.Projects.getProjects()],
		["priority", appController.Tasks.getPriorityNames()],
		["status", appController.Tasks.getColumnNames()],
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

export function populateForm(selectedId) {
	const task = appController.Tasks.getTasksByProperty("id", +selectedId)[0];
	appController.Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(prop);

		switch (prop) {
			case "project":
			case "priority":
			case "status":
				[...element.children].forEach((option) => {
					option.selected = option.value === task.getProperty(prop);
				});
				break;
			case "title":
				element.value = makeFirstUpper(prop);
				break;

			case "notes":
				element.textContent = makeFirstUpper(task.getProperty("notes"));
				break;

			default:
				element.value = prop;
				break;
		}
	});
	document.querySelector(
		".edit-mode-buttons.id-bubble-marker"
	).dataset.taskId = selectedId;
}
