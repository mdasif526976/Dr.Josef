import React, {  useState } from 'react';

const AddService = () => {
    const [service,setService] = useState({});
    const onblurHandler = (event)=>{
        const feild = event.target.name;
        const value = event.target.value;
        const newService = {...service}
        newService[feild] = value;
        setService(newService)
    }
    const onSubmitHandle = (event) => {
        event.preventDefault();

            fetch('https://assignment-11-server-site-chi.vercel.app/addService',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(service)
       })
       .then(res=> res.json())
       .then(data=>  
        {
            if (data.acknowledged) {
                alert('service added')
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
      <h1 className="text-5xl font-bold">Add Service Here !</h1>
    </div>
    <form onSubmit={onSubmitHandle}>
    <div className="card flex-shrink-0 w-[95%] lg:w-full max-w-sm shadow-2xl 
    bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Service image</span>
          </label>
          <input type="text" name='img' required onBlur={onblurHandler} placeholder="Image" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Service Name</span>
          </label>
          <input type="text" name='name' required onBlur={onblurHandler} placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Detail</span>
          </label>
          <input type="text" required name='details' onBlur={onblurHandler} placeholder="Write  descreption" className="input input-bordered px-24 py-24" />
        
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

export default AddService;