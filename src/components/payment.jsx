import img3 from "../img/img3.png"
import { useNavigate } from "react-router-dom"
export const Payment=()=>{
    const navigate=useNavigate()
    return(
        <div onClick={()=>{
            navigate("/")
        }} style={{width:"100%"}}>
            <img width="100%" src={img3}></img>
        </div>
    )
}