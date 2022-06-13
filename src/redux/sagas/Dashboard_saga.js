import { DashboardTypes } from '../action_types/Dashboard_type';
import { put, takeEvery } from "redux-saga/effects";
import { LoaderTypes } from "../action_types/loader_types";
import axios from 'axios'

function* dashboarddata() {
  console.log("hello saga");
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const uri = 'https://reqres.in/api/users'
    const res = yield axios.get(uri);
    console.log("response", res.data.data);

    yield put({ type: DashboardTypes.DATA_SUCCESS, data: res.data.data });
  }
  catch (e) {
    // callback(true);
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}
// userdata get by Id
function* userRequest(data,callback){
  console.log('da',data.data.id);
     yield put({type:LoaderTypes.LOADER_START})
 
     try{
         const url=`https://reqres.in/api/users/${data.data.id}`
         // const url = `${process.env.REACT_APP_API_URL}/users`
         const res=yield axios.get(url)
         yield put({type:DashboardTypes.PERSON_REQUST_SUCCESS,data: res.data.data})
         console.log('dash_saga',res.data.data)
         callback(true);
     }
     catch(e){
 
     }
     yield put({ type: LoaderTypes.LOADER_STOP});
 }
export default function* dashboardsaga() {
  yield takeEvery(DashboardTypes.DATA_REQUEST, dashboarddata);
  yield takeEvery(DashboardTypes.PERSON_REQUST,userRequest)

}