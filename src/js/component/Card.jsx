import React from "react"; 

const Card = (props) => {
  
    return ( 
    
            <div className="card" style={{width: '20rem', marginBottom: '20px'}}>
                    <img src={props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
            </div>
            );
};


export default Card