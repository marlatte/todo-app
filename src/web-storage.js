import { PubSub, EVENTS } from "./pubsub";
import { Tasks } from "./app-controller";

// This function is from MDN to test is storage is available on older browsers.
function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === "QuotaExceededError" ||
				// Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage &&
			storage.length !== 0
		);
	}
}

let storageType;
if (storageAvailable("localStorage")) {
	console.log("localStorage");
	storageType = localStorage;
} else if (storageAvailable("sessionStorage")) {
	console.log("sessionStorage");
	storageType = sessionStorage;
} else {
	console.log("No storage");
	PubSub.publish(EVENTS.ADD_DEFAULTS);
}
// PubSub.publish(EVENTS.ADD_DEFAULTS);

// let allTasks = Tasks.getAllTasks().map((task) => task.getProperties());
// console.log(allTasks);

// storageType.setItem("tasks", JSON.stringify([...allTasks]));
// storageType.removeItem("a");
console.log(storageType);

console.log(JSON.parse(storageType.getItem("tasks")));

/*
- Check type of storage available 
	- set storageType (local or session)
- Subscribe to trigger events
	- Run in parallel to rest of app, just in case storage fails
- Check storage populated
	- setStorage or getStorage
*/
