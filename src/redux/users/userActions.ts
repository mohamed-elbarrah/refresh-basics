import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionType"

export const fetchUserRequest=()=>{
    return {
        type: FETCH_USERS_REQUEST,
    };
};

export const fetchUserSuccess=(users:[])=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

export const fetchUserFailure=(error)=>{
    return {
        type: FETCH_USERS_FAILURE,
    };
};

export const fetchUsers = ()=>{
    return (dispatch)=>{

        dispatch(fetchUserRequest())

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            const users = res.data
            dispatch(fetchUserSuccess(users))

        }).catch(
        (err)=>{
            const errorMsg = err.message
            dispatch(fetchUserFailure(errorMsg))
        }
        )
    }
}