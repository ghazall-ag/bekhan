import React from 'react'
import { Navigate ,useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

export const RequiredAuth = ({children}) => {
  const auth = useAuth()
  const location = useLocation();
   // const navigate = useNavigate()
    
    if (!auth.user) {
      return  <Navigate to='/Login' state={{path:location.pathname}}/>
    }

  return children
}
