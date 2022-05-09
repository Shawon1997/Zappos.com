import { useEffect,useState } from "react"
import { useParams,Navigate } from "react-router-dom";

import { Button } from "./Button"
export const ProductDetails=()=>{
    const [product,setproducts]=useState([])
    const {id}=useParams()
    console.log(id)
    const getdata=async()=>{
        try {
            let res=await fetch(`http://localhost:8080/shop_popular/${id}`)
            let data=await res.json()
            setproducts(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getdata()
    }, []);
    return (
        <div>
            {product.map((e)=(
                <div className="ProductDetails">
                    <div><img src={e.image}></img></div>
                    <div><h2>{e.title}</h2>
                    <p>{e.price}</p>
                    <Button>Add to Cart</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}