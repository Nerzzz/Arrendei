import { IconTrash, IconLoader2 } from "@tabler/icons-react"

function DeleteButton({text, loading}) {
     return (
          <button className="p-[10px] gap-[10px] bg-transparent border-[1px] text-12pt flex items-center justify-center font-medium text-red-500 border-red-500 rounded-[10px] cursor-pointer" disabled={loading}>
               {!loading && <>
                    <IconTrash />
                    <span>{text}</span>
               </>}
               {loading && <IconLoader2 className="animate-spin" />}
          </button>
     )
}

export default DeleteButton