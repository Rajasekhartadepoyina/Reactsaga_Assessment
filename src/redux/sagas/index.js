import { all } from "redux-saga/effects";
import Dashboardsaga from './Dashboard_saga';
import AuthSaga from "./auth_saga";
export default function* RootSaga() {
  yield all([AuthSaga(),Dashboardsaga()]);
 
}
