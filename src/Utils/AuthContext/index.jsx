import React, { createContext, useState } from 'react'
export const authContext = createContext()

export default function AuthContext({children}) {
    const localToken = localStorage.getItem('token')
    const [token , setToken]=useState(localToken)
    localStorage.setItem('token' , token)
    const handleToken = (tk)=>{
      tk ? localStorage.setItem('token' , tk) : localStorage.removeItem('token')
        setToken(tk)
    }
  return (
    <authContext.Provider value={{ token , handleToken }}>
      {children}
    </authContext.Provider>
  )
}
