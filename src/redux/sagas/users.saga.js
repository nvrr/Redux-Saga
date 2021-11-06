import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'

// gh'' GH""

function* buyMobile(){
    yield delay(2000);
    yield put({type: 'BUY_MOBILE_SUCCESS'});
}

// takeLatest takes input and gives o/p for latest reqested :4 times clicked:o/p=>10 => 11
export function* watchUser() {
    yield takeLatest('BUY_MOBILE', buyMobile);
}
// export function* watchUser() {
//     yield takeEvery('BUY_MOBILE', buyMobile);
// } //takeEvery takes every input and if count is 4 times types its do that 4 times,o/p=>10=>14