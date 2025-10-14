import {  useState } from "react"
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { diposit, drow } from "../redux/BANK_ACCOUNT/bankActions";

const BankAccount = () => {

    const balance = useSelector((state:any)=>state)
    const dispatch = useDispatch();

    // const [balance, setBalance] =useState(0);
    const [amount, setAmount] =useState(0);

    // const diposit =()=>{
    //     setBalance(balance + amount)
    //     setAmount(0)
    // }

    // const drow =()=>{
    //     setBalance(balance - amount)
    //     setAmount(0)
    // }


  return (
    

        <div className="max-w-sm p-6 gap-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your balance is:</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{balance}$</h5>



            <input type="text" name="amount" id="text" placeholder="amount her" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            onChange={(e)=>setAmount(Number(e.target.value))}
            required />
           <div className="flex gap-2">
            <button onClick={()=>dispatch(diposit(amount))}>deposit</button>
            <button onClick={()=>dispatch(drow(amount))}>drow</button>
           </div>

            
        </div>

  )
}

export default BankAccount
