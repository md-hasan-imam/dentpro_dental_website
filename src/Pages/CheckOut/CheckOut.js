import React from 'react';
import { useParams } from 'react-router-dom';
import useSrvices from '../../Hooks/useSrvices';
import Service from '../Home/Services/Service/Service';

const CheckOut = () => {
    const params = useParams();

    const [services, setServices] = useSrvices();
    
    



    return (
        <div>
            <h2>this is service no {params.serviceId}</h2>
        </div>
    );
};

export default CheckOut;