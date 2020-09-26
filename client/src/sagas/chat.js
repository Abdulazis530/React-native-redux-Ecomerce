import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const API_URL = 'http://192.168.1.10:3001/api/';

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000,
});

const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });


const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });

const read2 = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });

const PATH = 'products';

// load
function* loadProducts(payload) {
    console.log(payload)
    const { limit, page } = payload;
    const QUERY_PATH = `${PATH}?limit=${limit}&page=${page}`;
    try {
        const data = yield call(read2, QUERY_PATH);
        console.log(data)
        yield put(actions.loadProductsSuccess(data));
    } catch (error) {
        console.log(error)
        console.log('here error')
        yield put(actions.loadProductsFailure());
    }
}

function* loadChat() {

    try {
        const data = yield call(read, PATH);
        yield put(actions.loadChatSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadChatFailure());
    }
}

function* postChat(payload) {
    const { name, message } = payload;
    let id = Date.now();
    yield put(actions.postChatRedux(id, name, message));
    try {
        console.log(id, name, message);
        const data = yield call(add, PATH, { id, name, message });
        yield put(actions.postChatSuccess(data));
        //history.push('/chats')
    } catch (error) {
        console.log(error);
        yield put(actions.postChatFailure(id));
    }
}



export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_CHATS', loadChat),
        takeEvery('LOAD_PRODUCTS', loadProducts),
        takeEvery('ADD_CHAT', postChat),
    ]);
}


