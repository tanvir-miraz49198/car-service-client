import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div className='mt-8 mb-8 '>
            <div className='text-center p-6'>
                <h3 className='text-3xl font-bold text-orange-600'>Our Services</h3>
                <h1 className='text-5xl font-bold mt-2'>Our Service Area</h1>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, earum <br /> exercitationem quae nobis unde ipsum quam animi excepturi saepe repellendus.</p>
            </div>
            <div className='grid md:grid-cols-2 justify-items-center lg:grid-cols-3 '>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;