import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

import './RichPeople.css'


const RichPeople = () => {
    const [person,setPerson]=useState([]);

useEffect(() =>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setPerson(data))
    
},[]) 


    return (
         <div className="rich-people">
          {person.map(personinfo=>  <Person personinfo={personinfo}></Person>)}

         </div>
        );
};

export default  RichPeople;