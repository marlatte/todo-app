import { makeFirstUpper } from "./helpers";
import { EV, PubSub } from "./pubsub";

function warnTaskDelete(selectedId, taskTitle) {
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
			swal({
				title: "Nevermind!",
				text: "We'll leave that one for now.",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

PubSub.subscribe(EV.WARN.TASK_DELETE, warnTaskDelete);
