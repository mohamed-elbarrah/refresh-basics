import axios from "axios";
import { useEffect, useReducer} from "react";


interface User {
  id: number;
  name: string;
  email: string;
}

// create state interface
interface State {
  isLoading: boolean;
  error: string | null;
  users: User[];
}

// change all states to state object or state interface
const initialState: State = {
  isLoading: true,
  error: null,
  users: []
}

// create action type
type Action = 
| { type: 'FETCH_SUCCESS'; payload: User[] }
| { type: 'FETCH_ERROR' };







function DataFitching() {
// use this cupole of state as initialState for useReducer
// const [isLoading, setIsLoding] = useState(true);
// const [error, setError] = useState<string | null>(null);
// const [users, setUsers] = useState<User[]>([]);

const reducer = (state: State, action: Action) =>{
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        isLoding: false,
        error: null,
        users: action.payload
      };
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        error: 'Something went wrong!',
        users: []
   }
    default:
      return state;
  };
};

const [ state, dispatch]= useReducer(reducer, initialState)




useEffect(() => {
  
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    // this for useState
      // setIsLoding(false);
      // setError(null);
      // setUsers(res.data)

    // change it to dispatch for useReducer
      dispatch({type: 'FETCH_SUCCESS', payload: res.data})
    })
    .catch(()=>{
      // this for useState
        // setIsLoding(false);
        // setError("Something went wrong!");
        // setUsers([]);

      // change it to dispatch for useReducer
      dispatch({type: 'FETCH_ERROR'})
    })

}, []);
  return (
    <div className="flex flex-wrap gap-4 p-4 w-full justify-center flex-1 flex-col sm:flex-row">
      {state.isLoading && <h2>Loading...</h2>}
      {state.error && <h2>{state.error}</h2>}
      {!state.isLoading && !state.error && state.users.length > 0 && (
        state.users.map((user)=>(
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          key={user.id}>

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400" >
          {user.email}
          </p>
        </a>
        ))
      )}
    </div>
  );
}

export default DataFitching
