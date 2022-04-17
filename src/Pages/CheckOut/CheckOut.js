import React from 'react';
import { useParams } from 'react-router-dom';
import useSrvices from '../../Hooks/useSrvices';
import Service from '../Home/Services/Service/Service';

const CheckOut = () => {
    const {serviceId} = useParams();
    // const [services, setServices] = useSrvices();
    // console.log(services);

    // const checkOutService = services.map(service =>console.log(service.id) );



    return (
        <div>
            <h2>this is service no {serviceId}</h2>
        </div>
    );
};

export default CheckOut;