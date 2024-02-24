import { NavLink, useParams } from "react-router-dom"
import { useState,useEffect } from "react";
function Product() {
  const controller= new AbortController()
    const {id}=useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`,{
        siqnal:controller.siqnal
      })
        .then(res => res.json())
        .then(json => {setData(json)
        setLoading(false)
        })
        return()=>{
          controller.abort()
        }
    }, [])

  return (
    <>
        <NavLink to='/'>Go Back and See other Products</NavLink>

    {loading?<h1> </h1>:<div className='product'>
        <img src={data.image} alt="" />
        <h2>{data.description}</h2>
        <h2>Price:${data.price}</h2>
        <h2>Category:{data.category}</h2>
    </div>}
    </>
  )
}

export default Product