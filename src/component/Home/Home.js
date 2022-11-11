import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../image/pexels-tima-miroshnichenko-5452293.jpg'
import img1 from '../../image/shop.jpg'
import img2 from '../../image/carosal -girl.jpg'
import Service from '../service/Service';

const Home = () => {
  const services = useLoaderData();
  
    return (
        <div className='my-5 mx-1'>
            <div className='grid bg-sky-500 md:grid md:py-7 md:px-36 md:grid-cols-6'>
                <div className='md:col-span-3 '>
                   <div className=''>
                      <img className='mx-5 w-60 rounded-lg' src={img} alt=''></img>
                   </div>
                  
                </div>
                <div className='md:col-span-3'>
                    <div className='mb-4 md:my-36 w-full'>
                    <h1 className='text-3xl text-white font-normal '>I Shall Provide You,<br></br> Best Services 
                     By Care & <br></br> Modern Technology.
                    </h1>
                    <div className='flex justify-around gap-3 mt-3'>
                    <Link to='/service' className='bg-green-300 p-4 rounded-md hover:bg-white hover:text-green-500 '>My Servies</Link>
                    <Link to='/about' className='bg-yellow-300 p-4 rounded-md hover:bg-white hover:text-yellow-500 '>Contract Me</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="p-6 py-12 my-4 rounded-xl  bg-sky-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-5xl tracking-tighter font-bold">Up to 
				<br className="sm:hidden"/> 20% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>for a new user & free shipping! Use code:</span>
				<span className="font-bold text-lg">Discount-20%</span>
			</div>
			<Link to='/service' className="px-5 hover:text-sky-600 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50
             dark:text-gray-900 border-gray-400">Explore Services</Link>
		</div>
	</div>
</div>

  </div>

  <h1 className='text-3xl font-bold my-2'>WelCome to My Clinic</h1>

         {/* curasel section */}
  <div className='md:w-11/12 md:mx-14 md:mt-5 md:rounded-full'>
  <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img alt='' src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  </div>
  </div>

  {/* --------------------------curasel section end ------------------------*/}
        
        {/* limit service section start */}

         <div className='mt-16'>
          <h1 className='text-3xl font-samibold'>Lets Explore My Services</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 md:mt-5 '>
          {
         services.map((p)=> <Service key={p._id} service={p}></Service>)
          }
         </div>
             <Link className='btn mt-3 btn-outline btn-info' to='/services'>All Services Here > </Link>
         </div>

        {/* limit service section end */}
  


        </div>
    );
};

export default Home;