let tasks = [
	{
		title: "Replace lightbulb",
		status: "backlog",
		dueDate: "",
		project: "home",
		priority: "medium",
		notes: "Bathroom light is flickering",
		tags: "",
	},
];

function taskFactory(title, status) {
	let title = title[0].toUpperCase() + title.slice(1);
	const task = { title, status };
	return {
		getProperty: (key) => task[key],
		setProperty: (key, value) => (task[key] = value),
		logData: () => console.log(Object.entries(task)),
	};
}
