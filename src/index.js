const appController = (() => {
	const Tasks = (() => {
		let _tasks = [];
		let _idCounter = 0;

		function _dateSort(outgoingTasks) {}

		function _taskFactory() {
			const _task = {};
			return {
				getProperty: (key) => _task[key],
				setProperty: (key, value) => (_task[key] = value),
				logData: () => Object.entries(_task), // devMode
			};
		}

		function addTask(inputValuesArray) {
			const newTask = _taskFactory();
			newTask.setProperty("id", _idCounter++);
			inputValuesArray.forEach((pair) => {
				newTask.setProperty(pair[0], pair[1]);
			});
			_tasks.push(newTask);
		}

		function removeTasks(...removeIds) {}

		function updateTask(updateId, inputValuesArray) {}

		function getTasksByProperty(prop, value) {}

		return {
			addTask,
			removeTasks,
			updateTask,
			getAllTasks: () => _tasks,
			getTasksByProperty,
		};
	})();

	const Projects = (() => {
		let _projectList = ["finances", "home", "learning"];

		function addProject(newProjectName) {
			_projectList.push(newProjectName.toLowerCase());
		}
		function removeProject(removeName) {
			_projectList.splice(_projectList.indexOf(removeName), 1);
			// Needs to remove all tasks associated with that project from _tasks
		}

		return {
			addProject,
			removeProject,
			getProjects: () => _projectList,
		};
	})();

	const _addDefaults = (() => {
		const defaultTasks = [
			{
				title: "Pay bills",
				status: "inProgress",
				project: "finances",
				priority: "high",
				notes: "The rent is too damn high",
				dueDate: "",
				tags: "",
			},
			{
				title: "groceries",
				status: "loaded",
				project: "home",
				priority: "medium",
				notes: "",
				dueDate: "",
				tags: "store",
			},
			{
				title: "files taxes",
				status: "backlog",
				project: "finances",
				priority: "medium",
				notes: "",
				dueDate: "",
				tags: "",
			},
			{
				title: "read Chekhov",
				status: "backlog",
				project: "learning",
				priority: "low",
				notes: "",
				dueDate: "",
				tags: "",
			},
			{
				title: "replace lightbulb",
				status: "loaded",
				project: "home",
				priority: "medium",
				notes: "Bathroom light is flickering",
				dueDate: "",
				tags: "store",
			},
		].map((item) => Object.entries(item));

		defaultTasks.forEach((item) => {
			Tasks.addTask(item);
		});

		// Check to make sure things are adding correctly. devMode
		Tasks.getAllTasks().forEach((task, index) => {
			console.log(`Task at: ${index}`);
			console.log(task.logData());
		});
	})();

	return { Tasks, Projects };
})();

/*   PSEUDO

MODULE appController
	IIFE Tasks
		_tasks = [],
		_idCounter,
		_dateSort(),
		_taskFactory(),
		addTask(inputValuesArray),
		removeTasks(...removeIds),
		updateTask(updateId, inputValuesArray)
		getAllTasks(), 
		getTasksByProperty(prop, ...values),
	END IIFE

	IIFE Projects
		_projectList = [],
		getProjects(), 
		addProject(newProjectName),
		removeProject(removeName)
	END IIFE

	FUNCTION addDefaults
		adds default tasks
	END FUNCTION

END MODULE

MODULE screenController
	VAR tasksToDisplay = []

	FUNCTION updateScreen()
		iterates through tasksToDisplay
	END FUNCTION 

END MODULE

 */
