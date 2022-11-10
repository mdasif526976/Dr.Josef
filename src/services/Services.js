import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../component/service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
          <div className='grid grid-cols-1 gap-9 md:grid-cols-3 mx-5'>
          {
         services.map((p)=> <Service key={p._id} service={p}></Service>)
          }
          </div>
        </div>
    );
};

export default Services;