import { makeFirstUpper } from "./helpers";
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
					timer: 2500,
				});
			}
		}
	});
}

PubSub.subscribe(EV.WARN.TASK_DELETE, warnTaskDelete);
