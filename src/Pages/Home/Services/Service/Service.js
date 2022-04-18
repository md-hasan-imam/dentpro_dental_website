import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const {id, name, price, description, img} = props.service;
    const navigate = useNavigate();

    const navigateToCheckout =(id)=>{
        navigate(`/checkout/${id}`)
    }

    return (
        <div className='single-service'>
            <img src={img} alt=""  className='w-100 rounded-top'/>
            <h3 className='my-2'>{name}</h3>
            <h4>$ {price}</h4>
            <p className='py-2'>{description}</p>
            <button onClick={()=>navigateToCheckout(id)} className='btn btn-primary checkout-button'>Checkout now</button>
        </div>
    );
};

export default Service;