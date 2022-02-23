import { UPDATE_REQUEST, UPDATE_ACTIVE_REQUEST } from "./requestsAction";
import { Request } from '../../types';
import { data } from './mock';
import { AnyAction } from "redux";

type InitialStateType = {
  requests: Array<Request>,
  activeRequest: number
}

const initialState: InitialStateType = {
  requests: data,
  activeRequest: 1
}

export const requestsReducer = (state = initialState, action: AnyAction): InitialStateType => {
  switch (action.type) {
    case UPDATE_REQUEST: 
      const filteredState = [...state.requests].filter(request => request.key !== action.payload.key);
      const newState = [action.payload, ...filteredState].sort((a, b) => a.key - b.key);
      
      return {
        requests: newState,
        activeRequest: state.activeRequest
      }
    case UPDATE_ACTIVE_REQUEST: 
      return {
        activeRequest: action.payload,
        requests: state.requests,
      }
    
    default:
      return state
  } 
}
