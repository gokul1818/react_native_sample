export const SET_TASKS = 'SET_TASKS';
export const SET_TASK_ID = 'SET_TASK_ID';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA = 'FETCH_DATA';


export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks,
});

export const setTaskID = (taskID) => ({
    type: SET_TASK_ID,
    payload: taskID,
});

export const fetchData = (data) => ({
    type: FETCH_DATA
});
export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})