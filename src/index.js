document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //   As a user, I should be able to type a task into the input field.
  const newDescription = document.getElementById("new-task-description");

  const newTaskName = document.getElementById("create-task-form");

  // As a user, I should be able to click some form of a submit button.

  newTaskName.addEventListener("submit", createNewTask);
});

const createNewTask = (e) => {
  e.preventDefault();

  const newDescription = document.getElementById("new-task-description");
  const newTaskItem = document.createElement("li");
  newTaskItem.innerText = newDescription.value;

  appendNewTask(newTaskItem);
  e.target.reset();
};

// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

const appendNewTask = function (task) {
  document.getElementById("tasks").appendChild(task);
};
