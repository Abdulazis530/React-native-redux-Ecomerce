import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios'

const API_URL = 'http://192.168.0.135:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });


const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const update = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const remove = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });


const PATH = 'chats';

// load
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
    yield put(actions.postChatRedux(id, name, message))
    try {
        const data = yield call(add, PATH, { id, name, message });
        yield put(actions.postChatSuccess(data));
        //history.push('/chats')
    } catch (error) {
        console.log(error);
        yield put(actions.postChatFailure(id));
    }
}

function* deleteChat(payload) {
    const { id } = payload;
    yield put(actions.deleteChatRedux(id))
    try {
        const data = yield call(remove, `${PATH}/${id}`);
        yield put(actions.deleteChatSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.deleteChatFailure(id));
    }
}

function* resendChat(payload) {
    const { id, name, message } = payload;
    try {
        const data = yield call(add, PATH, { id, name, message });
        yield put(actions.resendChatSuccess(id));
    } catch (error) {
        console.log(error);
        yield put(actions.postChatFailure(id));
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_CHATS', loadChat),
        takeEvery('ADD_CHAT', postChat),
        takeEvery('REMOVE_CHAT', deleteChat),
        takeEvery('RESEND_CHAT', resendChat),
    ]);
}


