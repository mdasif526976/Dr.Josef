import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/pexels-tima-miroshnichenko-5452293.jpg'

const Home = () => {
    return (
        <div className='my-5 mx-1'>
            <div className='grid  md:grid mx-36 md:grid-cols-6'>
                <div className='col-span-3 '>
                   <div className=''>
                      <img className='w-60' src={img} alt=''></img>
                   </div>
                  
                </div>
                <div className='md:col-span-3'>
                    <div className='mb-4 md:my-36 w-full'>
                    <h1 className='text-3xl font-extralight '>I'm Shall Provide You,<br></br> Best Services 
                     By Care & <br></br> Modern Technology.
                    </h1>
                    <div className='flex justify-around gap-3 mt-3'>
                    <Link to='' className='btn btn-outline btn-success'>My Servies</Link>
                    <Link to='' className=' btn btn-warning'>About Me</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div>
        
            </div>
        </div>
    );
};

export default Home;