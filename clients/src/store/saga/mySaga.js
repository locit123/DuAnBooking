import { call, takeLatest, put } from "redux-saga/effects";
import { getTypeFetch } from "./actions";
import * as Api from "../../apis/FetchApiUser";

function* fetchAllUser(action) {
  try {
    console.log("[ACTION]", action.payload);
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

function* mySaga() {
  yield takeLatest(getTypeFetch.getRequest, fetchAllUser);
}

export default mySaga;
