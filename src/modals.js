import { elFactory, htmlFactory, makeFirstUpper } from "./helpers";
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

export function buildEditMode(id) {
	// Builds a form, adds relevant task info IF an id is supplied
	return htmlFactory(
		elFactory("div", { classList: "edit-mode" }, [
			elFactory("section", { classList: "edit-mode-details" }, []),
			elFactory("section", { classList: "edit-mode-buttons" }, [
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
			]),
		])
	);
}
