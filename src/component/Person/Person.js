import React from 'react';
 
import './Person.css'

const Person = (props) => {
    const {name,address,netWorth,image,company}=props.personinfo;
    return (
        <div className="person">
        <img className="person-image" src= {image}/>
        <h1>Name:{name}</h1>
        <h4>Address:{address}</h4>
        <h4>Networth:{netWorth}$</h4>
        <h4>Company:{company}</h4>
         <button className="resize-button" type="button">click me</button>
        </div>
        );
};

export default Person;