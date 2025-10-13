import { useReducer } from "react"
import countreducer from "../reducers/countreducer"
import {intialState} from "../reducers/countreducer"




const ReducerHook = () => {
    const [count, dispatch] = useReducer(countreducer, intialState);
    const [countTow, dispatchCountTow] = useReducer(countreducer, intialState)
  return (
    <>
      <h1>Count: {count}</h1>
      <div className="flex gap-3">
        <button onClick={()=>{dispatch('increment')}}>➕</button>
        <button onClick={()=>{dispatch('decrement')}}>➖</button>
        <button onClick={()=>{dispatch('reset')}} >🔄️</button>
      </div>

      <h1>Count: {countTow}</h1>
      <div className="flex gap-3">
        <button onClick={()=>{dispatchCountTow('increment')}}>➕</button>
        <button onClick={()=>{dispatchCountTow('decrement')}}>➖</button>
        <button onClick={()=>{dispatchCountTow('reset') }}>🔄️</button>
      </div>
    </>
  )
}

export default ReducerHook;
