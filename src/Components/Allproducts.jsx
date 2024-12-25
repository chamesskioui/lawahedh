import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

function Allproducts() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const res=axios.get("https://fakestoreapi.com/products")
        .then((res)=>{setProducts(res.data)})
        .catch((error)=>console.log(error))
    },[])
   console.log(products);
   
  return (
          <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {products.map(el=>

            
 <Card style={{ width: '18rem',height:"600px" }}>
      <Card.Img style={{height:"40%"}} variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.Title}</Card.Title> 
        <Card.Text>
        {el.category}
        </Card.Text>
        <Card.Text style={{overflowY:"auto",height:"200px"}}>
        {el.description}
        </Card.Text>
        <Card.Text>
       <b>Price :</b> {el.price}$
        </Card.Text>


        
      </Card.Body>
    </Card>
    )}
    </div>
    
  )
}

export default Allproducts
