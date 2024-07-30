import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

const Beauty=()=>{
    const [state,setState]= useState([])

     useEffect(()=>{
      async function getData(){
        try{
          const a= await fetch('https://fakestoreapi.com/products')
          const b = await a.json()
          setState(b)
        }catch(error){
          console.log(error)
  
        }
      }
      getData()
  
     },[])
     console.log(state)
    return(
        <>
        <h1 className="text-center fw-bold display-2 mt-3">Beauty House</h1>
        <p className="text-center fw-light fs-5">Make yourself look Beautiful with our beauty products..</p>
        <div className="d-flex flex-row justify-content-space-around flex-wrap">
        {
            state.map((items)=>{
                return(
                  <div className="d-flex flex-column align-items-center border border-2 shadow m-5 p-5" style={{height:"max-content" ,width:"350px"}}>
                    <h3>{items.title.substring(0,50)+"..."}</h3>
                    <p>{items.description.substring(0,50)+"..."}</p>
                    <img src={items.image} alt="" height="200" width="200"/>
                    <div className="d-flex flex-row justify-content-space-between mt-5">
                    <p className="fs-5 fw-bold">{" $"+items.price}</p>
                    <Button variant="dark" >Add Cart</Button>
                    </div>
                  </div>  
                )
            })
        }
        </div>
        </>
    )
}
export default Beauty;