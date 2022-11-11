import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authproovider/AuthProvidor';

const InputReview = () => {
    const {user} = useContext(AuthContext)
    const [review,setReview] = useState({});
    const onblurHandler = (event)=>{
        const feild = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[feild] = value;
        setReview(newReview)
    }
    const onSubmitHandle = (event) => {
        event.preventDefault();
            fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(review)
       })
       .then(res=> res.json())
       .then(data=>  
        {
            if (data.acknowledged) {
                alert('review added')
                event.target.reset();
            }
        }    
    )
       .catch(error=>console.log(error))
      
     
      
    
    }

    // const postReview = ()=>{
    
    // }
    
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Write Review Here !</h1>
    </div>
    <form onSubmit={onSubmitHandle}>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input type="text" name='email' required onBlur={onblurHandler} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Name</span>
          </label>
          <input type="text" name='name' required onBlur={onblurHandler} placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your review</span>
          </label>
          <input type="text" required name=' details' onBlur={onblurHandler} placeholder="Write a review" className="input input-bordered px-24 py-24" />
        
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Confirm</button>
        </div>
        
      </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default InputReview;