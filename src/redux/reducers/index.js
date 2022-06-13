import { combineReducers } from "redux";
import AuthReducer from "./auth_reducer";
import LoaderReducer from "./loader_reducer";
import DashboardReducer from './dashboard_reducer'

const RootReducer = combineReducers({
  Auth: AuthReducer,
  Loader: LoaderReducer,
  Dashboard: DashboardReducer

});

export default RootReducer;
