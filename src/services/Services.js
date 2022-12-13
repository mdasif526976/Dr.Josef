import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../component/service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold mb-3'>Browse My All Services</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 mx-[15%] lg:mx-2 gap-4 md:grid-cols-2 md:mx-5'>
          {
         services.map((p)=> <Service key={p._id} service={p}></Service>)
          }
         
          </div>
        </div>
    );
};

export default Services;