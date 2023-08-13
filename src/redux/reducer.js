import { SET_TASKS, SET_TASK_ID, FETCH_DATA, FETCH_DATA_SUCCESS } from "./action";

const initialState = {
    tasks: [],
    data: [],
    taskID: 1,
    loading: false,
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        case SET_TASK_ID:
            return { ...state, taskID: action.payload };
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state;
    }
}

export default taskReducer;