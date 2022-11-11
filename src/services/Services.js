import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../component/service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
          <div className='grid grid-cols-1 gap-9 md:grid-cols-3 mx-5'>
          {
         services.map((p)=> <Service key={p._id} service={p}></Service>)
          }
          <div className='card w-96 bg-base-100 shadow-xl py-12'>
            <h1>Add A Service</h1>
            <Link to='/addService' className='text-5xl text-blue-600'>+</Link>
          </div>
          </div>
        </div>
    );
};

export default Services;