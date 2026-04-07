import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../utils/authContext'

import { IconPencilCog, IconLoader2 } from '@tabler/icons-react'

import ProfilePost from '../components/ProfilePost'

function Profile() {

  const user = useContext(AuthContext)

  const [date, setDate] = useState("")

  const [userData, setUserData] = useState(null)
  const [userPosts, setUserPosts] = useState(null)
  
  useEffect(() => {
    fetch(`https://arrendei-630d.onrender.com/users/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserData(data))
  },[!user])

  useEffect(() => {
    fetch(`https://arrendei-630d.onrender.com/posts/user/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserPosts(data))
  },[!userPosts])

  return (
    <main className='flex justify-center items-center flex-1'>
      {userData && userPosts && <section className='flex flex-col items-center flex-1 overflow-y-auto w-full'>
        {userData && <div className='flex items-center justify-between bg-white px-[40px] py-[20px] rounded-[10px] shadow-[0_0_20px_rgba(150,150,150,0.1)] w-full'>
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
        {userPosts && <div className='flex flex-col mt-[50px] w-full'>
          <h2>Anúncios</h2>
          <div id='user_posts' className='mt-[20px] flex flex-wrap gap-[20px]'>
            {userPosts && userPosts.map((post) => {
              return <ProfilePost key={post._id} id={post._id} isRent={post.post.isRent} imgs={post.post.images} />
            })}
          </div>
        </div>}
      </section>}
      {!userData && <IconLoader2 size={40} className='animate-spin text-accent' />}
    </main>
  )
}

export default Profile