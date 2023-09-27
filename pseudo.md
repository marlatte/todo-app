# Planning

## User story:

As a busy person, I want a todo app so that I can manage all my tasks as I work my way through them.

## Requirements

### Task items

Each task needs the following info:

#### Properties

-   Title
-   Status/progress
-   Due date
-   Project
-   Priority
-   A short description/notes
-   Tags

#### Methods

-   Getters and setters

### App overall

#### Characteristics

-   A Kanban style board with columns for: Backlog, Todo, In Progress, and Done.
    -   Mobile version: status columns will be stacked vertically on top of each other.
-   Projects can be viewed individually as tabs, but the default is an `allTasks` tab that's essentially a project.

#### Functionality

-   Clicking a task will show the full details (either as a dialog modal or a bootstrap-style accordion) with 2 modes:
    -   `displayMode`, a div that shows the task's full info and has `edit-btn`, which replaces the div with...
    -   `editMode`, a form with the task's info entered as values in each `<input>`.
-   Clicking on a tag will filter tasks by that tag.
-   Drag and drop tasks between columns, though they will also need to have a dropdown for the mobile version.
-   `new-thing-btn` that reveals 2 buttons above: `add-project-btn` & `add-task-btn`.

## Logical flow:

App logic:
Project names stored in an array: Finances, Reading, Home
Tasks created by task factory or class (Use composition, Object.assign())
Create sample tasks: Pay bills, groceries, files taxes, read Chekhov, replace lightbulb

DOM controller:
Use elFactory to create nested objects and htmlFactory to add them to the DOM
Probably gonna need separate Fn's for creating the display structures of tasks viewed in listMode, in displayMode, and in editMode
Load the page
