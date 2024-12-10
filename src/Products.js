import React from 'react'

const PRODUCT_API='https://fakestoreapi.com/products?limit=5'
export default function Products() {
    
    const [products, setProducts]=useState(fetch(PRODUCT_API).then((res)=>res.json()))
useEffect(()=>{console.log('Mimic: component did mount')},[])
useEffect
  return (
    <div style={{color="red"}}>
      {loading ? <div>Loading</div> : }
    </div>
  )
}
