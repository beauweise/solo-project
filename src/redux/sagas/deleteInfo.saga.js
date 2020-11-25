import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteInfo(action) {
    try {
        let response = yield axios.delete(`/api/userData/${action.payload}`);
        yield put({ type: 'FETCH_HISTORY', payload: response.data })
    } catch (error) {
        console.log('error in delete catch', error);
    }
}

function* deleteListener() {
    yield takeLatest('DELETE_INFO', deleteInfo);
}

export default deleteListener;

