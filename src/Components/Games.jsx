import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
const Games=()=>{
    const [state,setState]= useState([])

     useEffect(()=>{
      async function getData(){
        try{
          const a= await fetch('https://www.cheapshark.com/api/1.0/deals?upperPrice=15')
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
        <h1 className="text-center fw-bold display-2 mt-3">Game Zone</h1>
        <p className="text-center fw-light fs-5">Experience the advanture with lots of games ...</p>
         <div className="d-flex flex-row justify-content-space-around flex-wrap">
        {
            state.map((items)=>{
                return(
                  <div className="d-flex flex-column align-items-center border border-2 shadow m-5 p-5 text-center" style={{height:"max-content" ,width:"350px"}}>
                    <h3 className="mb-3">{items.title}</h3>
                   
                    <img src={items.thumb} alt="" height="200" width="200"/>
                    <div className="d-flex flex-row justify-content-space-between mt-3">
                    <p className="fs-5 fw-bold">{" $"+items.normalPrice}</p>
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
export default Games;