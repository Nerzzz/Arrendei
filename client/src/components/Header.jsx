import { Link } from "react-router"

import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../utils/authContext"

function Header() {

  const user = useContext(AuthContext)
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    if(!user) return
    fetch(`https://arrendei-630d.onrender.com/users/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserData(data))

  }, [user])

  console.log(userData)
  
  return (
    <header className="py-[20px] px-[20px] flex justify-between items-center fixed top-0 z-50 bg-[#fefefe] w-full shadow-[0_0_60px_rgba(0,0,0,0.10)]">
        <span className="text-[20px] font-medium">Arrendei</span>
        {!user && <nav className="flex gap-[10px]">
          <Link to={"/login"}>Entrar</Link>
          <Link to={"/register"}>Registrar</Link>
        </nav>}
        <Link to="/profile">
          <nav className="flex items-center gap-[15px]">
            <span className="capitalize">
              {userData?.username}
            </span>
            <img src={userData?.image || "/images/user-placeholder-image.png"} className="w-[40px] h-[40px] rounded-full object-cover" />
          </nav>
        </Link>
    </header>
  )
}

export default Header