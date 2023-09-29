const taskController = (() => {
	let _tasks = [];
	const getAllTasks = () => _tasks;

	let _projectList = ["finances", "home", "learning"];
	const getProjects = () => _projectList;

	function addProject(newProjectName) {
		_projectList.push(newProjectName.toLowerCase());
	}
	function removeProject(removeName) {
		_projectList.splice(_projectList.indexOf(removeName), 1);
		// Needs to remove all tasks associated with that project from _tasks
	}

	function taskFactory() {
		const _task = {};
		return {
			getProperty: (key) => _task[key],
			setProperty: (key, value) => (_task[key] = value),
			logData: () => Object.entries(_task), // devMode
		};
	}

	function addTask(inputValuesArray) {
		const newTask = taskFactory();
		inputValuesArray.forEach((pair) => {
			newTask.setProperty(pair[0], pair[1]);
		});
		_tasks.push(newTask);
	}

	const addDefaults = (() => {
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
				tags: "",
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
				tags: "",
			},
		].map((item) => Object.entries(item));

		defaultTasks.forEach((item) => {
			addTask(item);
		});

		// Check to make sure things are adding correctly. devMode
		_tasks.forEach((task, index) => {
			console.log(`Task at: ${index}`);
			task.logData().forEach((element) => {
				console.log(element);
			});
		});
	})();

	return { getAllTasks, getProjects, addProject, removeProject };
})();
