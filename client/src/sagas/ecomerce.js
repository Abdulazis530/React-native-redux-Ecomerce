import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';
import { storeData, getData, removeToken } from '../helpers/asyncStorageHelper';


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
        });


const logOutUser = async (path, params) =>
    await request.get(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });


const signUpUser = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });

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

let PATH_USER = 'users';


function* logIn(payload) {
    const { email, password, navigation } = payload;
    try {
        const response = yield call(logInUser, `${PATH_USER}/login`, { email, password });
        if (response.token) {
            console.log('check response:', response)
            storeData(response.token);
        } else if (response[1][0].token) {
            console.log('check response2:', response)
            storeData(response[1][0].token);
        }
        navigation.replace('Home');


    } catch (error) {
        console.log(error);
        alert('Email or Already in Use')
        navigation.navigate('LogIn');

    }
}
function* signUp(payload) {
    const { email, password, retypepassword, navigation } = payload;

    try {
        const response = yield call(signUpUser, `${PATH_USER}/register`, { email, password, retypepassword });
        console.log(response)
        if (response.token) {
            console.log('here cek signup')
            storeData(response.token);
        }
        navigation.push('Home');

    } catch (error) {
        console.log(error);
        alert('Email or Password wrong')
        navigation.navigate('SignUp');

    }
}

function* logout(payload) {
    const { token, cb } = payload;
    try {
        const headers = { Authorization: token };
        const response = yield call(logOutUser, `${PATH_USER}/destroy`, { headers });

        if (response.logout) {
            removeToken();
        }
        cb()

    } catch (error) {
        console.log(error);
        alert('Something went wrong')
    }
}



export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_PRODUCTS', loadProducts),
        takeEvery('LOGIN', logIn),
        takeEvery('LOG_OUT', logout),
        takeEvery('SIGNUP', signUp),
    ]);
}


