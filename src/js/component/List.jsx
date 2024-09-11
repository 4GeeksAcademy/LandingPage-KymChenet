import React from "react";
import Card from "./Card";
import Cartitas from "../Cartitas";

const List = (props) => {      

     return (   
        <div className="container mt-3"> 
            <div className="row d-flex justify-content">
             {props.cards.map((car,i) => {
                 return ( 
            
                     <Card  
                     key={i}
                     title={car.title}
                     img= {car.img}
                     descripcion = {car.descripcion}
                     />
                  
                 )})}
            </div>
         </div>
     
    
         )
    
    }
 

export {List}