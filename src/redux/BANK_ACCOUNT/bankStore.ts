import { createStore } from "redux";
import reducer from "./BankReducer";

const store = createStore(reducer);

export default store;