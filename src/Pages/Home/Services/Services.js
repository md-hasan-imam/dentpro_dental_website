import React from 'react';
import useSrvices from '../../../Hooks/useSrvices';
import Service from './Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useSrvices();

    return (
        <div className=''>
            <h1 className='my-5 section-title'>Services</h1>
            <div className="services-container ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;