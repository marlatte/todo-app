import { makeFirstUpper } from "./helpers";
import { dialog } from "./dialog";
import { EV, PubSub } from "./pubsub";
import swal from "sweetalert";

function warnTaskDelete(selectedId, taskTitle, reopenDialog) {
	swal({
		title: "Are you sure?",
		text: `Once deleted, the "${makeFirstUpper(
			taskTitle
		)}" task cannot be recovered.`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			PubSub.publish(EV.TASK.DELETE, selectedId);
			swal({
				title: "Poof! Task deleted!",
				text: "Way to get it done.",
				icon: "success",
				buttons: false,
				timer: 2000,
			});
		} else {
			if (reopenDialog) {
				const fakeEvent = {
					target: {
						classList: { value: "id-bubble-marker" },
						dataset: { taskId: selectedId },
					},
				};
				setTimeout(() => {
					PubSub.publish(EV.CARD.CLICK, fakeEvent);
				}, 60);
			} else {
				swal({
					title: "Nevermind!",
					text: "We'll leave that one for now.",
					buttons: false,
					timer: 2000,
				});
			}
		}
	});
}

function warnProjectDelete(selectedProject) {
	swal({
		title: "Are you sure?",
		text: `Deleting project "${makeFirstUpper(
			selectedProject
		)}" will also permanently delete all its tasks.`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			PubSub.publish(EV.PROJECT.DELETE, selectedProject);
			swal({
				title: "Poof! Project deleted!",
				text: "Goodbye chores, hello freedom.",
				icon: "success",
				buttons: false,
				timer: 3000,
			});
		} else {
			swal({
				title: "Nevermind!",
				text: "Plenty left to do, eh?",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnDefaults() {
	swal({
		title: "Are you sure?",
		text: "Defaults replace all tasks and projects with an example set. \nThis will erase anything you have saved.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willRestoreDefaults) => {
		if (willRestoreDefaults) {
			PubSub.publish(EV.RESET.ADD_DEFAULTS);
			swal({
				title: "Back to Basics!",
				text: "Play around - you can always click the button again.",
				icon: "success",
				buttons: false,
				timer: 3000,
			});
		} else {
			swal({
				title: "Nevermind!",
				text: "Yeah, we didn't want to you to either.",
				buttons: false,
				timer: 2500,
			});
		}
	});
}

function warnClearAll() {
	swal({
		title: "Are you sure?",
		text: "Deleting all tasks AND projects cannot be undone.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willClearAll) => {
		if (willClearAll) {
			PubSub.publish(EV.RESET.CLEAR_ALL);
			swal({
				title: "WHOOSH!",
				text: "All gone.",
				icon: "success",
				buttons: false,
				timer: 2000,
			});
		} else {
			swal({
				title: "Phew!",
				text: "That was a close one.",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnTaskSubmit(submitId, valuesArray) {
	swal({
		title: "All set?",
		text: `Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willSubmit) => {
		if (willSubmit) {
			if (submitId === 0) {
				PubSub.publish(EV.TASK.ADD, valuesArray);
			} else {
				PubSub.publish(EV.TASK.UPDATE, submitId, valuesArray);
			}
		} else {
			PubSub.publish(EV.DIALOG.EDIT_MODE);
			const rebuiltTask = valuesArray.reduce(
				(acc, current) => {
					acc[current[0]] = current[1];
					return acc;
				},
				{ id: submitId }
			);
			PubSub.publish(EV.DIALOG.EDIT_MODE_POP, rebuiltTask);
		}
	});
}

const subWarnTask = PubSub.subscribe(EV.WARN.TASK_DELETE, warnTaskDelete);
const subWarnProject = PubSub.subscribe(EV.WARN.PROJECT_DELETE, warnProjectDelete);
const subWarnSubmit = PubSub.subscribe(EV.WARN.TASK_SUBMIT, warnTaskSubmit);

const subWarnDefaults = PubSub.subscribe(EV.WARN.DEFAULTS, warnDefaults);
const subWarnClearAll = PubSub.subscribe(EV.WARN.CLEAR_ALL, warnClearAll);
