import { DashboardTypes } from '../action_types/Dashboard_type';

const initialState = {
  userlist: []
};

export default function DashboardReducer(state = initialState, action = null) {
  
  if (!state) {
    state = initialState;
  }
  
  switch (action.type) {

    case DashboardTypes.DATA_SUCCESS: {
      return {
        ...state,
        userlist: action.data
        
      };
      
    }
    case DashboardTypes.PERSON_REQUST_SUCCESS: {
      return {
        ...state,
        Persondata: action.data
      };
    }
    
    default:
      return state;
  }
}