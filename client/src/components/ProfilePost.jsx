import Tag from "./Tag"

function ProfilePost(props) { 

     function sendMsg(){
          alert(props.id)
     }

     return (
          <button className="bg-white p-[20px] flex flex-col gap-[20px] rounded-[10px] shadow-[0_0_20px_rgba(10,10,10,0.1)]" onClick={sendMsg}>
               <img src={props.imgs[0]} alt="" className="w-[200px] h-[200px] object-cover" />
               <Tag isRent={props.isRent} />
          </button>
     )
}

export default ProfilePost