const appController = (() => {
	const Tasks = (() => {
		let _tasks = [];
		let _idCounter = 0;

		function _dateSort(outgoingTasks) {
			return outgoingTasks; // devMode
		}

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

		function removeTasks(...removeIds) {
			_tasks.forEach((task, index) => {
				if (removeIds.includes(task.getProperty("id"))) {
					_tasks.splice(index, 1);
				}
			});

			// devMode
			_tasks.forEach((item) => console.log(item.getProperty("id")));
		}

		function updateTask(updateId, inputValuesArray) {
			_tasks.forEach((task, index) => {
				if (updateId === task.getProperty("id")) {
					inputValuesArray.forEach((pair) => {
						_tasks[index].setProperty(pair[0], pair[1]);
					});
				}
			});
		}

		function getTasksByProperty(prop, value) {
			return _dateSort(
				_tasks.filter((task) => task.getProperty(prop) === value)
			);
		}

		return {
			addTask,
			removeTasks,
			updateTask,
			getAllTasks: () => _dateSort(_tasks),
			getTasksByProperty,
		};
	})();

	const Projects = (() => {
		let _projectList = ["home", "finances", "learning"];

		function addProject(newProjectName) {
			_projectList.push(newProjectName);
		}
		function removeProject(removeName) {
			if (_projectList.includes(removeName)) {
				// Get task.id's associated with that project
				const removeIds = Tasks.getTasksByProperty(
					"project",
					removeName
				).map((task) => task.getProperty("id"));

				// Remove all tasks with those id's from _tasks
				Tasks.removeTasks(...removeIds);

				// Remove name from project list
				_projectList.splice(_projectList.indexOf(removeName), 1);

				// devMode
				console.log(_projectList);
			}
		}

		return {
			addProject,
			removeProject,
			getProjects: () => _projectList.sort(),
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
	Grab constant DOM elements:
		#nav-display-btn,
		h1.project-displayed, 
		#backlog-column, 
		#to-do-column, 
		#in-progress-column, 
		#done-column,
		#add-btn,
		#add-project-btn,
		#add-task-btn,
		dialog

	VAR tasksToDisplay = []

	FUNCTION updateScreen()
		iterates through tasksToDisplay, 
		sorts by column, 
		calls elFactory and appends them to appropriate column.
	END FUNCTION 

END MODULE

 */

const screenController = (() => {
	const addBtn = document.getElementById("add-btn");
	addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
})();
