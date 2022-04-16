import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

   useEffect(()=>{
       fetch('services.json')
       .then(res => res.json())
       .then(data => setServices(data))
   }, [])
    return (
        <div>
            <h1>Services-1: {services.length}</h1>
        </div>
    );
};

export default Services;