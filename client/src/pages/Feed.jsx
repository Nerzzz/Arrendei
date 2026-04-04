import Hero from '../components/Hero'

import { useContext } from 'react'
import { AuthContext } from '../utils/authContext'

function Feed() {

  const user = useContext(AuthContext)

  return (
    <main>
        {!user && <Hero />}
        <section>
            <h2>Anúncios</h2>
            <div className='flex gap-3.5 flex-wrap mt-[30px]'>
                
            </div>
        </section>
    </main>
  )
}

export default Feed