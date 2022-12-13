import React, { useContext } from 'react';
import { AuthContext } from '../../authproovider/AuthProvidor';
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router-dom';
const InputReview = () => {
    const {oldReview,SetReview,user,setReviewName,reviewName} = useContext(AuthContext)
       const location = useParams();
       const navigate = useNavigate();
    const onSubmitHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const details = form.details.value;
        const date =format(new Date(),'PP');
        const review = {name:user?.displayName, email:user?.email,details:details,
          img:user.photoURL,service:reviewName,
          date:date} ;


            fetch('https://assignment-11-server-site-chi.vercel.app/reviews',{
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
                SetReview(oldReview+1)
                setReviewName(null)
                alert('review added')
                navigate(`/services/${location.id}`)
                event.target.reset();
            }
        }    
    )
       .catch(error=>console.log(error))

    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Write Review Here !</h1>
    </div>
    <form onSubmit={onSubmitHandle}>
    <div className="card flex-shrink-0 mx-2 lg:w-full w-[90%]  max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input type="text" name='email' value={user.email}
           placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Name</span>
          </label>
          <input type="text" name='name' value={user.displayName}
           placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" name='name' value={reviewName} disabled
           placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your review</span>
          </label>
          <input type="text" required name='details'
           placeholder="Write a review" className="input input-bordered px-24 py-24" />
        
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