import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = (props) => {
    const {_id,name,img,details,price} = props.service;
    return (
        <div>
           <div className="card md:w-96  w-72  bg-base-100 shadow-xl">
           <PhotoProvider>
      <PhotoView src={img}>
      <figure><img src={img} className='w-96 h-64' alt="Loading" /></figure>
      </PhotoView>
    </PhotoProvider>
 
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <h2 className="text-xl font-sami-bold">Price:{price}$
    </h2>
    <p>{details.slice(0, 100) + (details.length > 100 ? "..." : details)}</p>
    <div className="card-actions justify-center">
     <Link to={`/services/${_id}`} className='bg-sky-600 text-white p-4 
     rounded-md hover:bg-white hover:text-sky-500'>See More> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;