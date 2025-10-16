import { combineReducers } from "redux";
import reducerUsers from "./users/userReducer";
import reducer from "./BANK_ACCOUNT/BankReducer";


const rootReducer = combineReducers({
    bankAccount: reducer,
    users: reducerUsers,

})

export default rootReducer;

