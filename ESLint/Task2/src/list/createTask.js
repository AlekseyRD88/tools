// import { renderTasks } from './renderer';
// import { getItem, setItem } from './storage';
import { createTask } from './tasksGateway';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  // const tasksList = getItem('tasksList') || [];
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  createTask(newTask);
};
