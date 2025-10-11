import axios from "axios";
import { useEffect, useState } from "react";


function DataFitching() {

const [isLoading, setIsLoding] = useState(true);
const [error, setError] = useState(null);
const [users, setUsers] = useState([]);

useEffect(() => {
  
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      setIsLoding(false);
      setError(null);
      setUsers(res.data)
    })
    .catch((error)=>{
        setIsLoding(false);
        setError("Something went wrong!");
        setUsers([]);
    })
    

}, []);
  return (
    <div className="flex flex-wrap gap-4 p-4 w-full justify-center flex-1 flex-col sm:flex-row">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && users.length > 0 && (
        users.map((user)=>(
            <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            key={user.id}
        >
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
