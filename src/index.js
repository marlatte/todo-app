let tasks = [];

function taskFactory(details = {}) {
	details.title = details.title[0].toUpperCase() + details.title.slice(1);
	const _task = {};
	Object.assign(_task, details);
	return {
		getProperty: (key) => _task[key],
		setProperty: (key, value) => (_task[key] = value),
		logData: () => Object.entries(_task),
	};
}

function addDefaults() {
	const defaultTasks = [
		{
			title: "replace lightbulb",
			status: "backlog",
			dueDate: "",
			project: "home",
			priority: "medium",
			notes: "Bathroom light is flickering",
			tags: "",
		},
	];

	defaultTasks.forEach((item) => {
		tasks.push(taskFactory(item));
	});

	tasks.forEach((task, index) => {
		console.log(`Task at: ${index}`);
		task.logData().forEach((element) => {
			console.log(element);
		});
	});
}

addDefaults();
