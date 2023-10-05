import { elFactory, htmlFactory } from "./dom-factories";
import * as appController from "./app-controller";
import { makeFirstUpper } from "./index";

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
			elFactory("section", { classList: "display-mode-details" }, [
				elFactory(),
			]),
			elFactory(
				"section",
				{
					classList: "display-mode-buttons",
					dataset: { taskID: selectedId },
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
}
