import { EventEmitter } from 'events';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

class TaskStore extends EventEmitter {
  getTasks() {
    return tasks;
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = {
          id: Date.now(),
          text: action.payload,
        };
        tasks.push(newTask);
        this.emit('change');
        break;

      case 'DELETE_TASK':
        tasks = tasks.filter(task => task.id !== action.payload);
        this.emit('change');
        break;

      default:
        break;
    }
  }
}

const taskStore = new TaskStore();

import dispatcher from './dispatcher';
dispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;