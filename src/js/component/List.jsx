import React from "react";
import Card from "./Card";
import Cartitas from "../Cartitas";

const List = (props) => {      

     return (   
        <div> 
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
     
    
         )
    
    }
 

export {List}