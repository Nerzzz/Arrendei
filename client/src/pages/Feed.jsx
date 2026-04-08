import Hero from '../components/Hero'

import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../utils/authContext'


import PostsView from '../components/PostsView'

function Feed() {
  const user = useContext(AuthContext)

  return (
    <main>
      {!user && <Hero />}

      <section>
        <h2>Anúncios</h2>
        <PostsView endPoint={"/posts"} />
      </section>
    </main>
  )
}

export default Feed