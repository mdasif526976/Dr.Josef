import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../authproovider/AuthProvidor';
import Review from '../review/Review';

const Detail = () => {
  const {setReviewName} = useContext(AuthContext)
    const {_id,name,img,details,price} = useLoaderData();
    const sendReview=()=>{
      setReviewName(name)
    }
    const {isLoading,data:reviews=[]} = useQuery({
      queryKey:['reviews'],
      queryFn:async()=>{
        const res = await fetch(`https://assignment-11-server-site-chi.vercel.app/review/${name}`)
        const data = res.json();
       return data;
      }
    })
    if(isLoading){
      return
    }
    console.log(reviews)
    return (
        <div className='mx-5'>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-6'>
            <div className='col-span-4 ml-6'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">Price:{price}$</h2>
          <p>{details}</p>
          <div className="card-actions lg:justify-between justify-around ">
            <Link to='/about' className="btn btn-primary">Contract Me</Link>
            <button onClick={sendReview} ><Link 
            className="btn btn-primary" to={`/review/${_id}`}>Write a review</Link></button>
          </div>
        </div>
      </div>
            </div>
            <div className='col-span-2'>
                <h1>All Review Here</h1>
                {
                  reviews.map(review=> <Review review={review} key={review._id}></Review>)
                }
            </div>
        </div>
        </div>
    );
};

export default Detail;