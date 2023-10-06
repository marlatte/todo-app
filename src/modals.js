import {
	elFactory,
	formRowFactory,
	htmlFactory,
	makeFirstUpper,
} from "./helpers";
import * as appController from "./app-controller";

const dialog = document.querySelector("dialog");

export function buildDisplayMode(selectedId) {
	const task = appController.Tasks.getTasksByProperty("id", +selectedId)[0];

	// Returns nested elFactories to append to dialog
	return htmlFactory(
		elFactory("div", { classList: "display-mode" }, [
			elFactory("section", { classList: "display-mode-header" }, [
				elFactory("h3", {
					classList: "display-title",
					textContent: task.getProperty("title"),
				}),
				elFactory("button", {
					type: "button",
					classList: "close-btn",
					textContent: "×",
				}),
			]),
			elFactory(
				"section",
				{ classList: "display-mode-details" },
				// Add details!!!!
				[
					"project",
					"priority",
					"due-date",
					"status",
					"notes",
					"tags",
				].map((prop) => {
					return elFactory(
						"p",
						{
							textContent: `${makeFirstUpper(prop)}: `,
						},
						[
							elFactory("span", {
								classList: `display-${prop}`,
								textContent: task.getProperty(prop),
							}),
						]
					);
				})
			),
			elFactory(
				"section",
				{
					classList: "display-mode-buttons id-bubble-marker",
					dataset: { taskId: selectedId },
				},
				[
					elFactory("button", {
						type: "button",
						id: "edit-btn",
						textContent: "Edit",
					}),
					elFactory("button", {
						type: "button",
						id: "delete-btn",
						textContent: "Delete",
					}),
				]
			),
		])
	);
}

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
							<label for="due-date">Due Date:</label>
							<input type="date" id="due-date" />
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
				<section class="edit-mode-buttons id-bubble-marker">
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
		pair[1].forEach((project) => {
			element.appendChild(
				htmlFactory(
					elFactory("option", {
						value: project,
						textContent: makeFirstUpper(project),
					})
				)
			);
		});
	});
}

export function populateForm(selectedId) {
	const task = appController.Tasks.getTasksByProperty("id", +selectedId)[0];

	// Grab select elements and set values
	["project", "priority", "status"].forEach((prop) => {
		const element = document.getElementById(prop);
		// Find the right <option> and give it selected=true
	});

	// Grab inputs and set values
	["title", "due-date", "tags"].forEach((prop) => {
		const element = document.getElementById(prop);
		element.value = task.getProperty(
			prop === "due-date" ? "dueDate" : prop
		);
	});

	document.getElementById("notes").textContent = task.getProperty("notes");
	document.querySelector(
		".edit-mode-buttons.id-bubble-marker"
	).dataset.taskId = selectedId;
}
