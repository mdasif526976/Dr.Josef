import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detail = () => {
    const {_id,name,img,details} = useLoaderData();
    
    return (
        <div className='mx-5'>
        <div className='grid grid-cols-1 md:grid-cols-6'>
            <div className='col-span-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
            </div>
            <div className='col-span-2'>
                <h1>All Review Here</h1>
            </div>
        </div>
        </div>
    );
};

export default Detail;