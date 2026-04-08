import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditPostWindow({data, onUpdate, onClose}) {    

     function editHandler(e){
          e.preventDefault()
          onUpdate()
          onClose()
     }

     return (
          <div className='bg-white p-[20px] rounded-[10px] flex-1 h-full'>
               <h2>Editar Anúncio</h2>
               <form onSubmit={editHandler}>
                    <button>Bolas</button>
               </form>
          </div>
     )
}

export default EditPostWindow