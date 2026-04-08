import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../utils/authContext'

import { IconPencilCog, IconLoader2 } from '@tabler/icons-react'

import Post from '../components/Post'
import FullScreenPost from '../components/FullScreenPost'

function Profile() {

  const { user, loading } = useContext(AuthContext)

  const [userData, setUserData] = useState(null)
  const [userPosts, setUserPosts] = useState(null)

  const [open, setOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  
  useEffect(() => {
    if(!user || loading) return

    fetch(`https://arrendei-630d.onrender.com/users/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserData(data))
  },[!user])

  useEffect(() => {
    if(!user || loading) return

    fetch(`https://arrendei-630d.onrender.com/posts/user/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserPosts(data))

    console.log(userPosts)
  },[!userPosts])

  return (
    <main className='flex justify-center items-center flex-1'>

      {userData && userPosts && <section className='flex flex-col items-center flex-1 overflow-y-auto w-full'>

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

        {userPosts && <div className='flex flex-col mt-[50px] w-full'>
          <h2>Anúncios</h2>
          <div id='user_posts' className='mt-[20px] flex flex-wrap gap-[20px] p-[20px]'>
            {userPosts && userPosts.length > 0 ? (
              userPosts.map((post) => {
                return <Post onOpen={() => {setSelectedPost(post); setOpen(true)}} key={post._id} userUid={post.userUid} id={post._id} title={post.post.title} isRent={post.post.isRent} imgs={post.post.images} />
              })) : (
                <p className='text-center w-full'>Nenhum post encontrado...</p>
              )}
          </div>
        </div>}

      </section>}

      {!userData && <IconLoader2 size={40} className='animate-spin text-accent' />}
      {open && <FullScreenPost onClose={() => setOpen(false)} data={selectedPost}/>}

    </main>
  )
}

export default Profile