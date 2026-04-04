import { Routes, Route, useLocation } from 'react-router'
import { ToastContainer } from "react-toastify"

import { useEffect, useState } from 'react'

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase.config"

import Aside from './components/Aside'

import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

import { AuthContext } from './utils/authContext'

import 'react-toastify/dist/ReactToastify.css'

function AppContent(){
  const location = useLocation()
  const hideAside = location.pathname === "/login" || location.pathname === "/register"

  return(
    <div className="min-h-screen flex">
      {!hideAside && <Aside />}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
        <ToastContainer position="top-right" />
      </div>
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { setUser(user) })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={user}>
      <AppContent />
    </AuthContext.Provider>
  )
}

export default App