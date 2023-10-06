import {
	elFactory,
	formRowFactory,
	htmlFactory,
	makeFirstUpper,
} from "./helpers";
import * as appController from "./app-controller";

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

export function buildEditMode(selectedId = "") {
	// Builds a form, adds relevant task info IF an id is supplied
	const task = selectedId
		? appController.Tasks.getTasksByProperty("id", +selectedId)[0]
		: { getProperty: (prop) => "" };

	const titleRow = formRowFactory([
		["input", "Title", task.getProperty("title"), "text"],
	]);

	const middleRows = formRowFactory([
		[
			"select",
			"Project",
			task.getProperty("project"),
			appController.Projects.getProjects(),
		],
		[
			"select",
			"Priority",
			task.getProperty("priority"),
			["high", "medium", "low"],
		],
		["input", "Due Date", task.getProperty("dueDate"), "date"],
		[
			"select",
			"Status",
			task.getProperty("status"),
			appController.Tasks.getColumnNames(),
		],
		["textarea", "Notes", task.getProperty("notes")],
	]);

	const tagsRow = formRowFactory([
		["input", "Tags", task.getProperty("tags"), "text"],
	]);

	tagsRow[0].children[0].children.unshift(
		elFactory("p", { textContent: "Enter tags separated by commas." })
	);

	return htmlFactory(
		elFactory("div", { classList: "edit-mode" }, [
			elFactory("section", { classList: "edit-mode-details" }, [
				...titleRow,
				...middleRows,
				...tagsRow,
			]),
			elFactory(
				"section",
				{
					classList: "edit-mode-buttons id-bubble-marker",
					dataset: { taskId: selectedId },
				},
				[
					elFactory("button", {
						type: "submit",
						id: "save-btn",
						textContent: "Save",
					}),
					elFactory("button", {
						type: "button",
						id: "cancel-btn",
						textContent: "Cancel",
					}),
				]
			),
		])
	);
}
