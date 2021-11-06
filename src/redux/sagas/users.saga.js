import { call,all, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'


// gh'' GH""

function* buyMobile(){
    // yield delay(2000);
    yield put({type: 'BUY_MOBILE_SUCCESS'});
}
function* sellMobile(){
    // yield delay(2000);
    yield put({type: 'SELL_MOBILE_SUCCESS'});
}
function* getAllUsers(){
    try{
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({type: 'GET_ALL_USERS_SUCCESS', data:users.data});
    } catch (error) {
        yield put({type: 'GET_ALL_USERS_FAILED',message: error.message});
    }
}


// takeLatest takes input and gives o/p for latest reqested :4 times clicked:o/p=>10 => 11
export function* watchUser() {
    yield all([
        takeLatest('BUY_MOBILE', buyMobile),
        takeLatest('SELL_MOBILE', sellMobile),
        takeLatest('GET_ALL_USERS', getAllUsers),
        ]);
}
// export function* watchUser() {
//     yield takeEvery('BUY_MOBILE', buyMobile);
// } //takeEvery takes every input and if count is 4 times types its do that 4 times,o/p=>10=>14

