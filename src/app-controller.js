import { PubSub, EVENTS } from "./pubsub";

export const Tasks = (() => {
	let _taskList = [];
	let _idCounter = 1;

	const _columnNames = ["backlog", "to-do", "in-progress", "done"];

	let _propertyNames = [
		"title",
		"status",
		"project",
		"priority",
		"notes",
		"due",
		"tags",
	];

	let _priorities = ["high", "medium", "low"];

	function _dateSort(outgoingTasks) {
		return outgoingTasks.sort((a, b) => {
			const dateA = +a.getProperties().due.split("-").join("");
			const dateB = +b.getProperties().due.split("-").join("");
			return !dateA ? 1 : dateB - dateA;
		});
	}

	function _columnSort(outgoingTasks) {
		return _columnNames.map((columnName) => {
			return [
				columnName,
				_dateSort(
					outgoingTasks.filter(
						(task) => task.getProperties().status === columnName
					)
				),
			];
		});
	}

	function _taskFactory() {
		const _task = {};
		const setProperty = (key, value) => (_task[key] = value);
		_propertyNames.forEach((prop) => setProperty(prop, ""));
		return {
			getProperties: () => _task,
			setProperty,
		};
	}

	function addTask(inputValuesArray) {
		const newTask = _taskFactory();
		newTask.setProperty("id", _idCounter++);
		inputValuesArray.forEach((pair) => {
			newTask.setProperty(pair[0], pair[1]);
		});
		_taskList.push(newTask);
	}

	function removeTasks(...removeIds) {
		_taskList.forEach((task, index) => {
			if (removeIds.includes(task.getProperties().id)) {
				_taskList.splice(index, 1);
			}
		});
	}

	function updateTask(updateId, inputValuesArray) {
		_taskList.forEach((task, index) => {
			if (updateId === task.getProperties().id) {
				inputValuesArray.forEach((pair) => {
					_taskList[index].setProperty(pair[0], pair[1]);
				});
			}
		});
	}

	function getTasksBy(prop, value) {
		return _taskList.filter((task) => task.getProperties()[prop] === value);
	}

	function getSortedTasksBy(prop, value) {
		return _columnSort(
			_taskList.filter((task) => task.getProperties()[prop] === value)
		);
	}

	const subAddTask = PubSub.subscribe(EVENTS.ADD_TASK, addTask);
	const subRemoveTask = PubSub.subscribe(EVENTS.DELETE_TASK, removeTasks);
	const subUpdateTask = PubSub.subscribe(EVENTS.UPDATE_TASK, updateTask);

	return {
		getAllTasks: () => _taskList,
		getSortedTasks: () => _columnSort(_taskList),
		getTasksBy,
		getSortedTasksBy,
		getColumnNames: () => _columnNames,
		getPriorityNames: () => _priorities,
		getPropertyNames: () => _propertyNames,
	};
})();

export const Projects = (() => {
	let _projectList = new Set(["home", "finances", "learning"]);

	function addProject(newProjectName) {
		_projectList.add(newProjectName.toLowerCase());
	}

	function removeProject(removeName) {
		if (_projectList.has(removeName)) {
			// Get task.id's associated with that project
			const removeIds = Tasks.getTasksBy("project", removeName).map(
				(task) => task.getProperties().id
			);

			// Remove all tasks with those id's from _taskList
			PubSub.publish(EVENTS.DELETE_TASK, ...removeIds);

			// Remove name from project list
			_projectList.delete(removeName);
		}
	}

	const subAddProject = PubSub.subscribe(EVENTS.ADD_PROJECT, addProject);
	const subRemoveProject = PubSub.subscribe(
		EVENTS.DELETE_PROJECT,
		removeProject
	);

	return {
		getProjects: () => [..._projectList].sort(),
	};
})();

function addDefaults() {
	const defaultTasks = [
		{
			title: "pay bills",
			status: "in-progress",
			project: "finances",
			priority: "high",
			notes: "the rent is too damn high",
			due: "2023-11-01",
			tags: "",
		},
		{
			title: "groceries",
			status: "to-do",
			project: "home",
			priority: "medium",
			notes: "",
			due: "",
			tags: "store",
		},
		{
			title: "file taxes",
			status: "backlog",
			project: "finances",
			priority: "medium",
			notes: "",
			due: "",
			tags: "",
		},
		{
			title: "read Chekhov",
			status: "backlog",
			project: "learning",
			priority: "low",
			notes: "",
			due: "2023-11-05",
			tags: "",
		},
		{
			title: "replace lightbulb",
			status: "to-do",
			project: "home",
			priority: "medium",
			notes: "bathroom light is flickering",
			due: "",
			tags: "store",
		},
	].map((item) => Object.entries(item));

	defaultTasks.forEach((item) => {
		PubSub.publish(EVENTS.ADD_TASK, item);
	});
}

PubSub.subscribe(EVENTS.ADD_DEFAULTS, addDefaults);
