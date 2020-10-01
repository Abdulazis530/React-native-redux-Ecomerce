import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';
import { storeData, getData } from '../helpers/asyncStorageHelper';


const API_URL = 'http://192.168.1.8:3001/api/';

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


const logInUser = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        })


// const signUpUser = async (path) =>
// await request.get(path)
//     .then(response => response.data)
//     .catch(err => {
//         throw err;
//     });

let PATH = 'products';

// load
function* loadProducts(payload) {
    const { limit, page } = payload;
    const QUERY_PATH = `${PATH}?limit=${limit}&page=${page}`;
    try {
        const data = yield call(read2, QUERY_PATH);
        yield put(actions.loadProductsSuccess(data));
    } catch (error) {
        console.log(error);
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



let PATH_USER = 'users';


function* logIn(payload) {
    const { data: { email, password } } = payload;
    try {
        const response = yield call(logInUser, `${PATH_USER}/login`, { email, password });
        storeData(response.token)
    } catch (error) {
        console.log(error);
        alert('Email or Password wrong')
    }
}

// function* signUp(payload) {
//     const { data:{email, password,retypepassword} } = payload;

//     const data = yield call(signUpUser, PATH_USER , {email, password });
//     try {
//         console.log(email, password,retypepassword);
//         yield put(actions.signUpSuccess(data));
//         //history.push('/chats')
//     } catch (error) {
//         console.log(error);
//         yield put(actions.signUpFailed(data));
//     }
// }


export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_CHATS', loadChat),
        takeEvery('LOAD_PRODUCTS', loadProducts),
        takeEvery('LOGIN', logIn),
        // takeEvery('SIGNUP',signUp)
    ]);
}


