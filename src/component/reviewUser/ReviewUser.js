import React, { useContext } from 'react';
import { AuthContext } from '../../authproovider/AuthProvidor';
import Review from '../review/Review';

const ReviewUser = () => {
    const {userReview} = useContext(AuthContext)
    return (
        <div className='grid grid-cols-1 gap-5'>
        {
        userReview.map(p=><Review key={p._id} review={p}></Review>)
}
    </div>
    );
};

export default ReviewUser;