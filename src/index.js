const appController = (() => {
	const Tasks = (() => {
		let _tasks = [];
		let _idCounter = 0;

		function _dateSort(outgoingTasks) {
			return outgoingTasks; // devMode
		}

		function _columnSort(outgoingTasks) {
			const columnSortedArray = [
				"backlog",
				"to-do",
				"in-progress",
				"done",
			].map((statusType) =>
				_dateSort(
					outgoingTasks.filter(
						(task) => task.getProperty("status") === statusType
					)
				)
			);
			return {
				backlog: columnSortedArray[0],
				toDo: columnSortedArray[1],
				inProgress: columnSortedArray[2],
				done: columnSortedArray[3],
			};
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
			return _columnSort(
				_tasks.filter((task) => task.getProperty(prop) === value)
			);
		}

		return {
			addTask,
			removeTasks,
			updateTask,
			getAllTasks: () => _columnSort(_tasks),
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
				status: "in-progress",
				project: "finances",
				priority: "high",
				notes: "The rent is too damn high",
				dueDate: "",
				tags: "",
			},
			{
				title: "groceries",
				status: "to-do",
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
				status: "to-do",
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
		const testDefaultTasks = Tasks.getAllTasks();
		for (const key in testDefaultTasks) {
			console.log(`Column: ${key}`);
			testDefaultTasks[key].forEach((task, index) => {
				console.log(`\tTask at: ${index}`);
				console.log(
					`\t\t${task.logData().join("\n\t\t").split(",").join(": ")}`
				);
			});
			console.log("\n");
		}
	})();

	return { Tasks, Projects };
})();

/*   PSEUDO

MODULE screenController
	Grab constant DOM elements:
		#nav-display-btn,
		h1.project-displayed, 
		#backlog-cards, 
		#to-do-cards, 
		#in-progress-cards, 
		#done-cards,
		#add-btn,
		#add-project-btn,
		#add-task-btn,
		dialog

	LET {currentDisplay}: whatever will be displayed on screen. 
		Will need to be updated by other FN's.

	FUNCTION updateScreen()
		Sorts {currentDisplay} by column, 
		Calls elFactory/htmlFactory, appends them to appropriate column.
		Adds event listeners
	END FUNCTION 

// Opening displayMode
	EVENT LISTENER any task on click: openDisplayMode(targetTask)
	FUNCTION openDisplayMode(targetTask)
		Gets targetTask's info and displays it in full displayMode.
		Adds event listeners for buttons.
	END FUNCTION

// Opening editMode
	EVENT LISTENER edit-btn on click: openEditMode(targetTask)
	FUNCTION openEditMode(targetTask)
	 	Builds a form in <dialog>.
		IF (targetTask)
			Gets targetTask info and sets form input values.
		END IF
		Adds event listeners for editMode buttons.
		Removes event listeners for displayMode buttons.
	END FUNCTION

// Deleting a task
	EVENT LISTENER task-delete-btn on click: deleteTask(targetTask)
	FUNCTION deleteTask(targetTask)
		Removes task from list
		closeDialog()
		Updates the screen.
	END FUNCTION

// Canceling changes
	EVENT LISTENER task-cancel-btn on click: closeDialog()
	FUNCTION closeDialog()
		Erases dialog inner content and closes it.
	END FUNCTION

// Submitting changes, a new task, or new project
	EVENT LISTENER form on submit: handleFormSubmit(e)
	FUNCTION handleFormSubmit(e)
		Submits new details to targetTask.
		closeDialog()
		Updates the screen.
	END FUNCTION

// Creating a task
	EVENT LISTENER add-task-btn on click: openEditMode()

// Creating a project
	EVENT LISTENER add-project-btn on click: openProjectMode()
	FUNCTION openProjectMode()
		Opens dialog/form with single input.
	END FUNCTION

// Deleting a project
	EVENT LISTENER project-delete-btn on click: deleteProject(e)
	FUNCTION deleteProject(e)
		Get projectName from e.target.dataset.etc.
		Remove name from project list.
		Update sidebar
	END FUNCTION

END MODULE

 */

const screenController = (() => {
	const addBtn = document.getElementById("add-btn");
	addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
})();
