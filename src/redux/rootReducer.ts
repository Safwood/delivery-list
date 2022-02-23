import { combineReducers } from "redux";
import { requestsReducer } from "./requests/requestsReducer";

const rootReducer = combineReducers({
  requests: requestsReducer, 
});
  
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;