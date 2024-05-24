import { call, takeLatest, put } from "redux-saga/effects";
import {
  deleteTypeFetch,
  getTypeFetch,
  getTypeFetchAllCode1,
  getTypeFetchAllCode2,
  getTypeFetchAllCode3,
  postTypeFetch,
  putTypeFetch,
} from "./actions";
import * as Api from "../../apis/FetchApiUser";
import * as ApiAllCode from "../../apis/FetchApiAllCode";
import * as ApiLogin from "../../apis/FetchApiLoginUser";
import { getTypeLoginFetch } from "../FetchApiLogin/actions";
//------------FETCH-API-USERS-----------
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
    } else {
      yield put(postTypeFetch.postFailed(data.DT));
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
//-----------FETCH-API-ALLCODE--------------
function* fetchAllCode(action) {
  try {
    let res = yield call(ApiAllCode.getAllCode, action.payload);
    let data = res.data;
    if (data && data.EC === 0 && data.DT.length > 0) {
      yield put(getTypeFetchAllCode1.getAllCodeSuccess(data.DT));
    }
  } catch (error) {
    yield put(getTypeFetchAllCode1.getAllCodeFailed(error));
  }
}
function* fetchRoleAllCode(action) {
  try {
    let res = yield call(ApiAllCode.getAllCode, action.payload);
    let data = res.data;
    if (data && data.EC === 0 && data.DT.length > 0) {
      yield put(getTypeFetchAllCode2.getRoleSuccess(data.DT));
    }
  } catch (error) {
    yield put(getTypeFetchAllCode2.getRoleFailed(error));
  }
}
function* fetchPositionAllCode(action) {
  try {
    let res = yield call(ApiAllCode.getAllCode, action.payload);
    let data = res.data;
    if (data && data.EC === 0 && data.DT.length > 0) {
      yield put(getTypeFetchAllCode3.getPositionSuccess(data.DT));
    }
  } catch (error) {
    yield put(getTypeFetchAllCode3.getPositionFailed(error));
  }
}

function* fetchLoginUser(action) {
  try {
    let res = yield call(ApiLogin.postLogin, action.payload);
    let data = res.data;
    yield put(getTypeLoginFetch.postLoginSuccess(data));
  } catch (error) {
    yield put(getTypeLoginFetch.postLoginFailed(error));
  }
}

function* mySaga() {
  yield takeLatest(getTypeFetch.getRequest, fetchAllUser);
  yield takeLatest(postTypeFetch.postRequest, fetchPostUser);
  yield takeLatest(putTypeFetch.putRequest, fetchPutUser);
  yield takeLatest(deleteTypeFetch.deleteRequest, fetchDeleteUser);
  yield takeLatest(getTypeFetchAllCode1.getAllCodeRequest, fetchAllCode);
  yield takeLatest(getTypeFetchAllCode2.getRoleRequest, fetchRoleAllCode);
  yield takeLatest(
    getTypeFetchAllCode3.getPositionRequest,
    fetchPositionAllCode
  );
  yield takeLatest(getTypeLoginFetch.postLoginRequest, fetchLoginUser);
}

export default mySaga;
