import { PubSub, EV } from "./pubsub";
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
	PubSub.publish(EV.RESET.ADD_DEFAULTS);
}

if (!!storageType.getItem("allTasks")) {
	getStorage();
}

function setStorage() {
	const allTasks = Tasks.getAllTasks().map((task) => {
		const taskNoId = task.getProperties();
		delete taskNoId.id;
		return taskNoId;
	});
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
		PubSub.publish(EV.PROJECT.ADD, project);
	});

	storedTasks.forEach((item) => {
		PubSub.publish(EV.TASK.ADD, item);
	});
}

function clearStorage() {
	storageType.clear();
}

const subSetAddTask = PubSub.subscribe(EV.TASK.ADD, setStorage);
const subSetDeleteTask = PubSub.subscribe(EV.TASK.DELETE, setStorage);
const subSetUpdateTask = PubSub.subscribe(EV.TASK.UPDATE, setStorage);
const subSetAddProject = PubSub.subscribe(EV.PROJECT.ADD, setStorage);
const subSetDeleteProject = PubSub.subscribe(EV.PROJECT.DELETE, setStorage);

const subClearStorage = PubSub.subscribe(EV.RESET.CLEAR_ALL, clearStorage);
