import { useState } from "react"

import Tag from "./Tag"

function ProfilePost(props) { 
     return (
          <>
               <button onClick={props.onOpen} className="bg-white cursor-pointer p-[10px] w-fit flex flex-col gap-[10px] rounded-[10px] shadow-[0_0_20px_rgba(10,10,10,0.1)]">
                    <img src={props.imgs[0]} alt="" className="w-[200px] h-[200px] object-cover" />
                    <Tag isRent={props.isRent} />
                    <span className="max-w-[200px] text-[14pt] text-left truncate">{props.title}</span>
               </button>
          </>
     )
}

export default ProfilePost