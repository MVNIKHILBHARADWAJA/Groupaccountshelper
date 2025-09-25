import React from 'react'
import {useState,createContext} from "react"
export const DataContext=createContext();
 const UserContext = ({children}) => {
const [User, setUser] = useState(null);

  return (
    
    <DataContext.Provider value={{User,setUser}}>
        {children}
        </DataContext.Provider>
  )
}

export default UserContext;