import { Link } from "react-router"
import LinkIcon from "./LinkIcon"

import { useEffect, useState } from "react"

import { useContext } from "react"
import { AuthContext } from "../utils/authContext"

import { IconHome2Filled, IconUserFilled, IconSpeakerphone } from "@tabler/icons-react"

function Aside() {

     const user = useContext(AuthContext)

     const [userData, setUserData] = useState(null)

     useEffect(() => {
          if(!user) return
          fetch(`https://arrendei-630d.onrender.com/users/${user.uid}`)
          .then(res => res.json())
          .then(data => setUserData(data))
     })


     return (
     <aside className='flex flex-col p-[20px] shadow-[0_0_60px_rgba(0,0,0,0.10)] z-50 gap-[30px] min-w-[200px]'>
               <span className='font-semibold text-[14pt]'>Arrendei</span>
               <div className="flex flex-col justify-between flex-1">
                    <div>
                         <ul className="flex flex-col gap-[10px]">
                              <li>
                                   <LinkIcon icon={<IconHome2Filled size={18} />} text={"Feed"} path={"/"} />
                              </li>
                              <li>
                                   <LinkIcon icon={<IconUserFilled size={18} />} text={"Perfil"} path={"/profile"} />
                              </li>
                              <li>
                                   <LinkIcon icon={<IconSpeakerphone size={18} />} text={"Anunciar"} path={"/announce"} />
                              </li>
                         </ul>
                    </div>    
                    <div className='bg-gray p-[10px] flex flex-col gap-[10px] rounded-[8px]'>
                         {userData && <Link className="w-fit flex gap-[10px] items-center">
                              <img src="/images/user-placeholder-image.png" className='w-[30px] h-[30px] rounded-[8px]' />
                              <span className="max-w-[100px] truncate">{userData.username}</span>
                         </Link>}
                         {!userData && <>
                              <Link to={"/login"} className="bg-element-bg px-[12px] py-[6px] text-center rounded-[10px]">Entrar</Link>
                              <Link to={"/register"} className="grad-green-to-right font-medium text-white px-[12px] py-[6px] text-center rounded-[10px] shadow-[0_0_60px_rgba(0,0,0,0.10)]">Registrar-se</Link>
                         </>}
                    </div>
               </div>
          </aside>
     )
}

export default Aside