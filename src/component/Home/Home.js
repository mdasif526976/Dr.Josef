import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/pexels-tima-miroshnichenko-5452293.jpg'

const Home = () => {
    return (
        <div className='my-5 mx-1'>
            <div className='grid bg-sky-500 md:grid py-7 px-36 md:grid-cols-6'>
                <div className='col-span-3 '>
                   <div className=''>
                      <img className='w-60 rounded-lg' src={img} alt=''></img>
                   </div>
                  
                </div>
                <div className='md:col-span-3'>
                    <div className='mb-4 md:my-36 w-full'>
                    <h1 className='text-3xl text-white font-normal '>I Shall Provide You,<br></br> Best Services 
                     By Care & <br></br> Modern Technology.
                    </h1>
                    <div className='flex justify-around gap-3 mt-3'>
                    <Link to='/service' className='bg-green-300 p-4 rounded-md hover:bg-white hover:text-green-500 '>My Servies</Link>
                    <Link to='' className='bg-yellow-300 p-4 rounded-md hover:bg-white hover:text-yellow-500 '>Contract Me</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="p-6 py-12  bg-sky-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-5xl tracking-tighter font-bold">Up to 
				<br className="sm:hidden"/> 20% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>for a new user & free shipping! Use code:</span>
				<span className="font-bold text-lg">Discount-20%</span>
			</div>
			<Link to='' className="px-5 hover:text-sky-600 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50
             dark:text-gray-900 border-gray-400">Explore Services</Link>
		</div>
	</div>
</div>
            </div>
        </div>
    );
};

export default Home;