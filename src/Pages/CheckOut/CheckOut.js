import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSrvices from '../../Hooks/useSrvices';
import Service from '../Home/Services/Service/Service';

const CheckOut = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    console.log(services);
    

        return (
            <div>
                <h2>this is service no {serviceId}</h2>
                {

                }
            </div>
        );
};
export default CheckOut;