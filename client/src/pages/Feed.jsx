import Hero from '../components/Hero'

import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../utils/authContext'

import Post from '../components/Post'
import FullScreenPost from '../components/FullScreenPost'

function Feed() {

  const [posts, setPosts] = useState(null)
  const user = useContext(AuthContext)

  const [open, setOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    fetch(`https://arrendei-630d.onrender.com/posts`)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[!posts])

  return (
    <main>
      {!user && <Hero />}

      <section>
        <h2>Anúncios</h2>
        <div className='mt-[20px] flex flex-wrap gap-[20px] p-[20px]'>
            {posts && posts.map((post) => {
              return <Post onOpen={() => {setSelectedPost(post); setOpen(true)}} key={post._id} userUid={post.userUid} id={post._id} title={post.post.title} isRent={post.post.isRent} imgs={post.post.images} />
            })}
        </div>
      </section>
      
      {open && <FullScreenPost onClose={() => setOpen(false)} data={selectedPost}/>}
    </main>
  )
}

export default Feed