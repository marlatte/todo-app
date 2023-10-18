import { PubSub, EVENTS } from "./pubsub";
import { Projects, Tasks } from "./app-controller";

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
	storageType = localStorage;
} else if (storageAvailable("sessionStorage")) {
	storageType = sessionStorage;
} else {
	PubSub.publish(EVENTS.ADD_DEFAULTS, false);
}

if (!!storageType.getItem("allTasks")) {
	getStorage();
}

function setStorage() {
	const allTasks = Tasks.getAllTasks().map((task) => task.getProperties());
	const allProjects = Projects.getProjects();

	storageType.setItem("allProjects", JSON.stringify(allProjects));
	storageType.setItem("allTasks", JSON.stringify([...allTasks]));
}

function getStorage() {
	const storedProjects = JSON.parse(storageType.getItem("allProjects"));
	const storedTasks = JSON.parse(storageType.getItem("allTasks")).map((item) =>
		Object.entries(item)
	);

	storedProjects.forEach((project) => {
		PubSub.publish(EVENTS.ADD_PROJECT, project);
	});

	storedTasks.forEach((item) => {
		PubSub.publish(EVENTS.ADD_TASK, item);
	});
}

function clearStorage() {
	storageType.clear();
}

const subSetAddTask = PubSub.subscribe(EVENTS.ADD_TASK, setStorage);
const subSetDeleteTask = PubSub.subscribe(EVENTS.DELETE_TASK, setStorage);
const subSetUpdateTask = PubSub.subscribe(EVENTS.UPDATE_TASK, setStorage);
const subSetAddProject = PubSub.subscribe(EVENTS.ADD_PROJECT, setStorage);
const subSetDeleteProject = PubSub.subscribe(EVENTS.DELETE_PROJECT, setStorage);

const subClearStorage = PubSub.subscribe(EVENTS.CLEAR_ALL, clearStorage);
