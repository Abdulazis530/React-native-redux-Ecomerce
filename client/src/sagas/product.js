import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';

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
const readDetailProducts = async (path) =>
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

const update = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });




const PATH = 'adds';

// load

function* loadProducts(payload) {
    const { limit, page } = payload;
    const QUERY_PATH = `${PATH}?limit=${limit}&page=${page}`;
    try {
        const data = yield call(read, QUERY_PATH);
        yield put(actions.loadProductsSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadProductsFailure());
    }
}
// function* loadProductsDetail(payload) {
//     const { id } = payload
//     const QUERY_PATH = `${PATH}/${id}`
//     try {
//         const data = yield call(readDetailProducts, QUERY_PATH)
//         yield put(actions.loadDetailProductsSuccess(data));
//     } catch (error) {
//         console.log(error);
//         Swal.fire({
//             icon: 'warning',
//             title: "Network connection trouble!",
//             text: "Call administator to fix the issue",
//             type: "warning",
//             buttons: true,
//             dangerMode: true,
//             timer: 1500
//         })

//     }
// }

//add
function* postProducts(payload) {
    const { newData, history } = payload;
    const formData = new FormData()
    for (const key in newData) {
        formData.append(key, newData[key])
    }
    try {

        yield call(add, PATH, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Products added successfully!',
            showConfirmButton: false,
            timer: 1200
        }).then(() => history.push('/'))

    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })


    }

}
//edit
function* updateProductsDetail(payload) {
    const { id, vote, history } = payload
    const QUERY_PATH = `${PATH}/${id}`

    yield call(update, QUERY_PATH, { vote })
    try {
        yield put(actions.resetDetailProducts())
    } catch (error) {
        console.log(error)

        Swal.fire({
            icon: 'warning',
            title: "Something went Wrong!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        }).then(() => history.push(`/detail/${id}`))
    }
}


export default function* rootSaga() {
    yield all([

        takeEvery('LOAD_ADDS', loadProducts),
        takeEvery('ADD_NEW_ADDS', postProducts),
        takeEvery('LOAD_DETAIL_ADDS', loadProductsDetail),
        takeEvery('UPDATE_VOTE', updateProductsDetail)
    ]);
}

