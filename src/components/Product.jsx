import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Home.css"
export const Product = () => {
    const navigate=useNavigate()
    const [show,setshow]=useState([])
    const [shoes,setshoes]=useState([])
    const [women,setwomen]=useState([])
    const [brand,setbrand]=useState([])
const getdata=async()=>{
    try {
        let res=await fetch("http://localhost:8080/shop_popular")
        let data=await res.json()
        setshow(data)
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    getdata()
}, []);
const getwomen=async()=>{
    try {
        let res=await fetch("http://localhost:8080/populer_product")
        let data=await res.json()
        setwomen(data)
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    getwomen()
}, []);
const getswhoes=async()=>{
    try {
        let res=await fetch("http://localhost:8080/ladies_wear")
        let data=await res.json()
        setshoes(data)
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    getswhoes()
}, []);
const getbrand=async()=>{
    try {
        let res=await fetch("http://localhost:8080/popular_brands")
        let data=await res.json()
        setbrand(data)
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    getbrand()
}, []);
    return (
      <>
           <div className="shop_dress">{show.map((e)=>(
             <><div className="shop_dress_box">
                 <div className="shop_dress_imagebox" onClick={()=>{
                     navigate(`/payment`)
                     console.log("hgh")
                 }}><div><img src={e.image} /></div></div>
                <br></br>
                 <div>{e.title}</div>   
                 {/*<div style={{color:"green"}}>${e.price}</div>              */}
             </div>
             </>
         ))}</div>
         <br></br>
         <div className="shop_dress">{shoes.map((e)=>(
             <><div className="shop_dress_box">
                 <div className="shop_dress_imagebox" onClick={()=>{
                     navigate(`/product/${id}`)
                 }}><div><img src={e.image} /></div></div>
                <br></br>
            

                 <div className="popular_text">
                 <div>{e.company_name}</div>                
                 <div>{e.title}</div>                
                 <div style={{color:"red"}}>${e.price}</div> 
                 </div>               
             </div>
             </>
         ))}</div>
         <br></br>
         <div className="populer_product">{women.map((e)=>(
             <><div className="shop_dress_box">
                 <div className="shop_dress_imagebox"><div><img src={e.image} /></div></div>
                <br></br>
            

                 <div className="popular_text">
                 <div>{e.company_name}</div>                
                 <div>{e.title}</div>                
                 <div style={{color:"green"}}>${e.price}</div> 
                 </div>               
             </div>
             </>
         ))}</div>
         <br></br>

      </>
    )
}