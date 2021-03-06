let nextTodoId = 0;

const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
};

export default ACTION_TYPES;

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const addTodo = text => ({
  type: ACTION_TYPES.ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = filter => dispatch => dispatch({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter,
});
