export const PubSub = (() => {
	const _eventsList = {};
	// { key: "triggerEvent", value: [ array of functions ] }

	function subscribe(triggerEvent, subscriber) {
		if (!_eventsList[triggerEvent]) {
			_eventsList[triggerEvent] = [subscriber];
		} else {
			_eventsList[triggerEvent].push(subscriber);
		}
		return {
			unsubscribe: () => {
				const functionList = _eventsList[triggerEvent];
				const i = functionList.indexOf(subscriber);
				if (i > -1) {
					functionList.splice(i, 1);
				}
			},
		};
	}

	function publish(triggerEvent, ...args) {
		const functionList = _eventsList[triggerEvent];
		if (Array.isArray(functionList)) {
			functionList.forEach((subscriber) => {
				subscriber.apply(null, args);
			});
		}
	}

	return { subscribe, publish };
})();

export const EV = {
	INIT: "init",
	DIALOG: {
		DISPLAY_MODE: "displayMode",
		EDIT_MODE: "editMode",
		EDIT_MODE_POP: "editModePopulate",
		PROJECT_MODE: "projectMode",
	},
	TASK: {
		DELETE: "deleteTask",
		ADD: "addTask",
		UPDATE: "updateTask",
	},
	INDEX: {
		CARD_CLICK: "cardClick",
		CARD_DELETE: "cardDelete",
		REOPEN_EDIT: "reopenEditMode",
	},
	PROJECT: {
		ADD: "addProject",
		DELETE: "deleteProject",
	},
	RESET: {
		ADD_DEFAULTS: "addDefaults",
		CLEAR_ALL: "clearAll",
	},
	WARN: {
		TASK_SUBMIT: "warnTaskSubmit",
		TASK_DELETE: "warnTaskDelete",
		PROJECT_DELETE: "warnProjectDelete",
		DEFAULTS: "warnDefaults",
		CLEAR_ALL: "warnClearAll",
	},
	ADD_DRAG_DROP: "addDragDrop",
	ADD_STATUS_DROP: "addStatusDrop",
};
