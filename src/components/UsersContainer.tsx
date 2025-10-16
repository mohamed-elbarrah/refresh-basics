import {connect} from "react-redux"
import { fetchUsers } from "../redux/users/userActions"
import Loading from "./Loading"
const UsersContainer = ({userData, fetchUsers}) => {
  return (

    userData.loading? (<Loading />) : userData.error? (<h2>{userData.error}</h2>) :(<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>

        </div>
        <div className="flow-root w-full">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 w-full ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            
                        </div>
                    </li>
                    
                </ul>
        </div>
        </div>)
    
  )

}

const mapStateToProps = (state)=>{
    console.log(`userData: ${state}`)
    return {
        
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
