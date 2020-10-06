import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';
import { storeData, removeToken } from '../helpers/asyncStorageHelper';


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


const add = async (path, params, config) =>
    await request.post(path, params, config)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(err => {
            console.log('err add:', err);
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
        const products = yield call(read, QUERY_PATH);
        yield put(actions.loadProductsSuccess(products));
    } catch (error) {
        console.log(error);
        yield put(actions.loadProductsFailure());
    }
}
function* addProduct(payload) {
    const { newProduct, token, navigation } = payload;
    const formData = new FormData();
    for (const key in newProduct) {
        if (key === 'images') {
            newProduct[key].forEach(image => {
                formData.append(key, {
                    uri: image.uri,
                    type: image.type,
                    name: 'image',
                });
            });
        } else {
            formData.append(key, newProduct[key]);
        }
    }
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    const product = yield call(add, PATH, formData, config);
    try {
        console.log('products:', product);
        // yield put(actions.addProductSuccess(product));
        navigation.replace('Home');
    } catch (error) {
        console.log(error);
        alert('SOMETHING WHEN WRONG');
        navigation.navigate('Add');

    }
}

let PATH_USER = 'users';


function* logIn(payload) {
    const { email, password, navigation } = payload;
    try {
        const response = yield call(logInUser, `${PATH_USER}/login`, { email, password });
        if (response.token) {
            storeData(response.token);
            yield put(actions.logInSuccess(response.token));

        } else if (response[1][0].token) {
            storeData(response[1][0].token);
            yield put(actions.logInSuccess(response.token));

        }
        navigation.replace('Home');

    } catch (error) {
        console.log(error);
        alert('Email or passwor wrong');
        yield put(actions.logInFail());
        navigation.navigate('LogIn');

    }
}
function* signUp(payload) {
    const { email, password, retypepassword, navigation } = payload;

    try {
        const response = yield call(signUpUser, `${PATH_USER}/register`, { email, password, retypepassword });
        if (response.token) {
            console.log('here cek signup');
            storeData(response.token);
            yield put(actions.signUpSuccess(response.token));
        }
        navigation.replace('Home');

    } catch (error) {
        console.log(error);
        alert('Email or Password wrong');
        yield put(actions.signUpFail());
        navigation.navigate('SignUp');

    }
}

function* logout(payload) {
    const { token } = payload;
    try {
        const headers = { Authorization: token };
        const response = yield call(logOutUser, `${PATH_USER}/destroy`, { headers });

        if (response.logout) {
            removeToken();
            yield put(actions.logOutSuccess());
        }

    } catch (error) {
        console.log(error);
        alert('Something went wrong');
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_PRODUCTS', loadProducts),
        takeEvery('LOGIN', logIn),
        takeEvery('LOG_OUT', logout),
        takeEvery('SIGNUP', signUp),
        takeEvery('ADD_PRODUCT', addProduct),
    ]);
}



