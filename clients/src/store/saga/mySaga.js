import { call, takeLatest, put } from "redux-saga/effects";
import {
  deleteTypeFetch,
  getTypeFetch,
  postTypeFetch,
  putTypeFetch,
} from "./actions";
import * as Api from "../../apis/FetchApiUser";

function* fetchAllUser(action) {
  try {
    let res = yield call(Api.getUser, action.payload);
    let data = res.data;
    console.log(data);
    if (data && data.EC === 0 && data.DT.length > 0) {
      yield put(getTypeFetch.getSuccess(data.DT));
    }
  } catch (error) {
    yield put(getTypeFetch.getFailed(error));
  }
}

function* fetchPostUser(action) {
  try {
    let res = yield call(Api.postUser, action.payload);
    let data = res.data;
    console.log(data);
    if (data && data.EC === 0) {
      yield put(postTypeFetch.postSuccess(data.DT));
    }
  } catch (error) {
    yield put(postTypeFetch.postFailed(error));
  }
}
function* fetchPutUser(action) {
  try {
    const { id, payload } = action.payload;
    let res = yield call(Api.putUser, id, payload);
    let data = res.data;
    if (data && data.EC === 0) {
      yield put(putTypeFetch.putSuccess(data.DT));
    }
  } catch (error) {
    yield put(putTypeFetch.putFailed(error));
  }
}
function* fetchDeleteUser(action) {
  try {
    let res = yield call(Api.deleteUser, action.payload);
    let data = res.data;
    if (data && data.EC === 0) {
      yield put(deleteTypeFetch.deleteSuccess(data.DT));
    }
  } catch (error) {
    yield put(deleteTypeFetch.deleteFailed(error));
  }
}
function* mySaga() {
  yield takeLatest(getTypeFetch.getRequest, fetchAllUser);
  yield takeLatest(postTypeFetch.postRequest, fetchPostUser);
  yield takeLatest(putTypeFetch.putRequest, fetchPutUser);
  yield takeLatest(deleteTypeFetch.deleteRequest, fetchDeleteUser);
}

export default mySaga;
