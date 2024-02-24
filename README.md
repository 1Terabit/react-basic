# TaskList

This project is a simple task list application created with React.

## Project Structure

The project consists of a single React component, `TaskList`, which is located in the `TaskList.js` file. This component handles the application logic and renders the user interface. The styles for this component are defined in the `TaskList.css` file.

## Code

The `TaskList` component uses React's `useState` hook to manage the state of the task list and the new task being entered.

When the form is submitted, the `addTask` function is called, which prevents the default form submission behavior, adds the new task to the task list, and then clears the input field.

The user interface consists of a form for entering new tasks and a list of existing tasks. The styles for this interface are defined in the `TaskList.css` file.

## How to Run the Project

To run this project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the application.

Open <http://localhost:3000> to view it in the browser.
