import { Routes, Route, useLocation } from 'react-router'
import { ToastContainer } from "react-toastify"

import { useEffect, useState } from 'react'

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase.config"

import Header from './components/Header'

import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

import { AuthContext } from './utils/authContext'

import 'react-toastify/dist/ReactToastify.css'

function AppContent(){
  const location = useLocation()
  const hideHeader = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/profile"

  return(
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Header />}

      <div className="flex-1">
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </div>

      <ToastContainer position="top-right" />
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