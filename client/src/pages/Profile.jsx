import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../utils/authContext'

import { IconPencilCog, IconLoader2 } from '@tabler/icons-react'

import PostsView from '../components/PostsView'

function Profile() {
  const { user, loading } = useContext(AuthContext)

  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    if(!user || loading) return

    fetch(`https://arrendei-630d.onrender.com/users/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserData(data))
  },[!user])

  return (
    <main className='flex justify-center items-center flex-1'>

      {userData && <section className='flex flex-col items-center flex-1 overflow-y-auto w-full'>

        {userData && <div className='flex items-center justify-between bg-white px-[40px] py-[20px] rounded-[10px] shadow-[0_0_20px_rgba(10,10,10,0.1)] w-full'>
          <div className='flex gap-[40px] items-center'>
            <img src="images/user-placeholder-image.png" alt="" className='w-[150px] h-[150px] object-cover rounded-full' />
            <div className='flex flex-col'>
              <span className='text-[20pt] font-medium'>{userData.username}</span>
              <span className='text-[10pt] text-gray-500'>{userData.email}</span>
            </div>
          </div>
          <button className='grad-green-to-right h-full px-[10px] rounded-full text-white cursor-pointer'>
            <IconPencilCog />
          </button>
        </div>}

        <PostsView endPoint={`/posts/user/${user.uid}`} />

      </section>}

      {!userData && <IconLoader2 size={40} className='animate-spin text-accent' />}

    </main>
  )
}

export default Profile