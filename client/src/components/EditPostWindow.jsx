import React, { useState } from 'react'

import ActionButton from './ActionButton'
import DeleteButton from './DeleteButton'

function EditPostWindow({data, onUpdate, onClose}) {   
     
     const [title, setTitle] = useState(data.post.title)
     const [desc, setDesc] = useState(data.post.desc)
     const [type, setType] = useState(data.post.type)
     const [isRent, setIsRent] = useState(data.post.isRent)

     function editHandler(e){
          e.preventDefault()
          onUpdate()
          onClose()
     }

     return (
          <div className='bg-white p-[20px] rounded-[10px] flex-1 h-full flex flex-col gap-[20px]'>
               <h2>Editar Anúncio</h2>
               <form onSubmit={editHandler} className='overflow-y-auto'>
                    <label htmlFor="">
                         <span>Título</span>
                         <input type="text" maxLength={100} value={title} placeholder='Título' onChange={(e) => setTitle(e.target.value)} />
                         <span className="text-[8pt] text-gray-500">{title.length}/100</span>
                    </label>
                    <label htmlFor="">
                         <span>Descrição</span>
                         <textarea onChange={(e) => setDesc(e.target.value)} maxLength={500} value={desc} placeholder='Título' id="" />
                         <span className="text-[8pt] text-gray-500">{desc.length}/500</span>
                    </label>
                    <label htmlFor="">
                         <span>Tipo: </span>
                         <select value={type} onChange={(e) => setType(e.target.value)}>
                              <option value="tool">Ferramenta</option>
                              <option value="vehicle">Veículo</option>
                              <option value="other">Outro</option>
                         </select>
                    </label>
                    <label htmlFor="" className='flex gap-[5px] items-center'>
                         <input type="checkbox" className='w-[20px] h-[20px] accent-accent' value={isRent} onChange={(e) => setIsRent(e.target.value)} />
                         <span>Foi alugado</span>
                    </label>
               </form>
               <nav className='flex justify-between mb-0 mt-auto'>
                    <div className='flex gap-[10px]'>
                         <ActionButton text="Salvar" />
                         <button onClick={onClose} className='p-[10px] bg-gray-200 rounded-[10px] cursor-pointer'>Cancelar</button>
                    </div>
                    <DeleteButton text={"Deletar"} />
               </nav>
          </div>
     )
}

export default EditPostWindow