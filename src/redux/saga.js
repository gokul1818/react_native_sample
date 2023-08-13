import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataSuccess } from './action';
function* fetchDataSaga() {
    try {
        const response = yield axios.get("https://fakestoreapi.com/products");
        yield put(fetchDataSuccess(response.data))
    }
    catch (error) {
        console.log(error)
        // yield put(fetchDataError(error.message));
    }
}
function* watchFetchData() {
    yield takeLatest('FETCH_DATA', fetchDataSaga);
}
export default function* rootSaga() {
    yield all([watchFetchData()]);
}