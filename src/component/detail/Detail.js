import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PeopleReview from '../PeopleReview/PeopleReview';

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
          <div className="card-actions justify-between">
            <Link to='/about' className="btn btn-primary">Contract Me</Link>
            <Link to='/review' className="btn btn-primary">Write a review</Link>
          </div>
        </div>
      </div>
            </div>
            <div className='col-span-2'>
                <h1>All Review Here</h1>
                <PeopleReview></PeopleReview>

                 
            </div>
        </div>
        </div>
    );
};

export default Detail;