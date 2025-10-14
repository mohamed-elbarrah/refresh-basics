import { useReducer } from "react"

const intialState = {firstCounter:0, secondCounter:5};

const reducer = (state:any, action:any) => {
    switch(action.type){
        // counter by 1
        case 'increment':
            return {...state, firstCounter: state.firstCounter +  action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};

        // counter by 5
        case 'incrementBy5':
            return {...state, secondCounter: state.secondCounter +  action.value};
        case 'decrementBy5':
            return {...state, secondCounter: state.secondCounter - action.value};

        case 'reset':
            return intialState;
        default:
            return state;

    }
}

const ReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <h1>Count: {count.firstCounter}</h1>
      <div className="flex gap-3">
        <button onClick={()=>{dispatch({type: 'increment', value:1})}} >➕</button>
        <button onClick={()=>{dispatch({type: 'decrement', value:1})}} >➖</button>
        <button onClick={()=>{dispatch({type: 'reset'})}} >🔄️</button>
      </div>

      {/* Counter by 5 */}
      <h1>Count: {count.secondCounter}</h1>
      <div className="flex gap-3">
        <button onClick={()=>{dispatch({type: 'incrementBy5', value: 5})}} >➕</button>
        <button onClick={()=>{dispatch({type: 'decrementBy5', value: 5})}} >➖</button>
        <button onClick={()=>{dispatch({type: 'reset', value: 5})}} >🔄️</button>
      </div>

    </>
  )
}

export default ReducerHook;
