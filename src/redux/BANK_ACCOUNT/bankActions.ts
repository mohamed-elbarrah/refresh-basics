import { DEPOSIT, DROW } from "./actionTypes";

export const diposit =(amount: number)=>{
    return{
        type:DEPOSIT,
        payload: amount

    }
};

export const drow =(amount: number)=>{
    return{
        type:DROW,
        payload: amount
    }
};


