import React from 'react';

const Review = ({review}) => {
    const {name,details,img,date} = review;
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
		<p> {details}</p>
	</div>
</div>

        </div>
    );
};

export default Review;