import { useContext } from "react"
import { AuthContext } from "../utils/authContext"
import { useNavigate } from "react-router"

function PrivateRoute({children}) {
     const user = useContext(AuthContext)

     let navigate = useNavigate()

     if(!user) return navigate("/login")

     return children
}

export default PrivateRoute