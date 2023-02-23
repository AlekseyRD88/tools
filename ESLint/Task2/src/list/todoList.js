import { onCreateTask } from './createTask';
import { deleteTask } from './tasksGateway';
import { onToggleTask } from './updateTask';
// import { createCheckbox, createListItem } from './renderer';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  const onListClick = (event) => {
    if (event === checkboxElem) {
      onToggleTask();
    } else if ((event = deleteBtnElem)) {
      deleteTask();
    }
  };
  todoListElem.addEventListener('click', onListClick);
};
