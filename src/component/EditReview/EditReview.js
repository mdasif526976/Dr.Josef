import React from 'react';

const EditReview = ({review,Delete,setModalData}) => {
    const {_id,name,details,img,service,date} = review;
  
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-5
		mx-auto divide-y rounded-md divide-gray-700 bg-gray-200
		 dark:text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>{review.img?
                <>
				<img src={img} alt="" className="object-cover
                 w-12 h-12 rounded-full dark:bg-gray-500" />
                 </>:
                <>
				<img src='https://i.ibb.co/DLPkXjt/review-2.png' alt="" 
				className="object-cover
                 w-12 h-12 rounded-full dark:bg-gray-500" />
                 </>
            }
			</div>
			<div>
				<h4 className="font-bold">{name}</h4>
				<span className="text-xs ">{date}</span>
			</div>
		</div>
		</div>
       
	<div className="p-4 space-y-2 text-sm text-gray-900">
        <strong className='text-[18px]'>Service Name: <span>{service}</span></strong>
		<p className='text-xl'> {details}</p>
        <div className='flex justify-between '>
        <label  onClick={()=>setModalData(review)} htmlFor="edit-text"
         className="btn text-white btn-info"
        >Edit Review</label>
      	<button onClick={()=> Delete(_id)} className='btn text-white btn-error'
        >Delete Review</button>
      </div>
	</div>
</div>

        </div>
    );
};

export default EditReview;