# Planning

## User story:

As a busy person, I want a todo app so that I can manage all my tasks as I work my way through them.

## Requirements

### Task items

Each task is an object with the following keys:

#### Properties

-   title
-   status
-   dueDate
-   project
-   priority
-   notes
-   tags

#### Methods

-   Getters and setters

### App overall

-   A Kanban style board with columns for: Backlog, Loaded, In Progress, and Done.
    -   Mobile version: status columns will be stacked vertically on top of each other.
-   Tasks default sorted by due date.
-   Projects can be viewed individually as tabs, but the default is an `allTasks` tab that's essentially a project.

## Logical flow:

taskController:

-   Project names stored in an array: Finances, Reading, Home
-   Tasks stored in an array.
    -   Projects are just one of a task's properties, but will be important for filtering
-   Tasks created by task factory or class
-   Create sample tasks: Pay bills, groceries, files taxes, read Chekhov, replace lightbulb
    -   Since some details may be coming from JSON, methods get added on after creation (Use composition, Object.assign())

domController:

-   Initial load.
    -   Use elFactory to create nested objects and htmlFactory to add them to the DOM.
    -   Separate Fn's for creating the display structures of tasks viewed in listMode, in displayMode, and in editMode.
    -   Load the page.
-   Organizing the view.
    -   Clicking on a tag will filter tasks by that tag.
    -   Clicking on a project will filter tasks by that project.
-   Editing a task.
    -   On click: show the full details (either as a dialog modal or a bootstrap-style accordion) with 2 modes:
        -   `displayMode`, a div that shows the task's full info and has `edit-btn`, which replaces the div with...
        -   `editMode`, a form with the task's info entered as values in each `<input>`.
            -   On submit: triggers `taskController.updateTask(taskIndex, inputValuesArray)`, then `updateScreen()`
    -   On drag and drop: tasks move between columns and update status, though they will also need to have a dropdown for the mobile version.
-   Adding things.
    -   `new-thing-btn` that reveals 2 buttons above: `add-project-btn` & `add-task-btn`.
    -   Creating a new task.
    -   Creating a new project.
-   Deleting things
    -   Removing a task
    -   Removing a project (and all its tasks)
