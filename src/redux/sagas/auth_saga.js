import { put, takeEvery } from "redux-saga/effects";
import { AuthTypes } from "../action_types/auth_types";
import { LoaderTypes } from "../action_types/loader_types";


//Login
function* login({ callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    callback(true);
    yield put({ type: AuthTypes.LOGIN_SUCCESS, data: {} });
  }
  catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

//logout
function* logout({ callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    callback(true);
    yield put({ type: AuthTypes.LOGOUT_SUCCESS, data: {} });
  }
  catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* AuthSaga() {
  yield takeEvery(AuthTypes.LOGIN_REQUEST, login);
  yield takeEvery(AuthTypes.LOGOUT_REQUEST, logout);
}
