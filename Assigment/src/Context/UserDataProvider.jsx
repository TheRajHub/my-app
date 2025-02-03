import { useState} from "react";
import UserDataContext from './UserDataContext'

function UserDataProvider({children}){
    const [data,setData]=useState()
    return(
        <UserDataContext.Provider value={{data,setData}}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataProvider