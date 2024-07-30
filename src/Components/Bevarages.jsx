
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"



const Bevarages =()=>{
    const [state,setState]= useState([])

     useEffect(()=>{
      async function getData(){
        try{
          const a= await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
          const b = await a.json()
         
          setState(b.drinks)
        }catch(error){
          console.log(error)
  
        }
      }
      getData()
  
     },[])
     console.log(state)
     return(
        <>
         <h1 className="text-center fw-bold display-2 mt-3">Want a Drink...</h1>
         <p className="text-center fw-light fs-5">Drink something special and make your tounge feel like heaven...</p>
        <div className="d-flex flex-row justify-content-space-around flex-wrap">
        {
            state.map((items)=>{
                return(
                  <div className="d-flex flex-column align-items-center border border-2 shadow m-5 p-5 text-center" style={{height:"max-content" ,width:"350px"}}>
                    <h3>{items.strDrink}</h3>
                    <p>{items.strIngredient1 + items.strIngredient2 +items.strIngredient3 +items.strIngredient4}</p>
                    <img src={items.strDrinkThumb} alt="" height="200" width="200"/>
                    <div className="d-flex flex-row justify-content-space-between mt-5">
                    <p className="fs-5 fw-bold m-2">{items.idDrink.substring(0,3)+" /-"}</p>
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
export default Bevarages;