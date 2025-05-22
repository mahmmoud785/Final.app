import dispatcher from './dispatcher';

export const addTask = (task) => {
  dispatcher.dispatch({
    type: 'ADD_TASK',
    payload: task,
  });
};

export const deleteTask = (id) => {
  dispatcher.dispatch({
    type: 'DELETE_TASK',
    payload: id,
  });
};