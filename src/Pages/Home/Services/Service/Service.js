import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, CC} = service;
    return (
        <div className='service-contain'>
            <img className='img-size' src={img} alt="" />
            <h2>{name}</h2>
            <Button variant='info'>Book: {name}</Button>
        </div>
    );
};

export default Service;