import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../authproovider/AuthProvidor';
import ReviewModal from '../../ReviewModal/ReviewModal';
import EditReview from '../EditReview/EditReview';

const ReviewUser = () => {
    const {user,SetReview,logOut} = useContext(AuthContext);
    const [modalData,setModalData] = useState('');
    const {refetch,data:review=[]} = useQuery({
        queryKey:['userReview'],
        queryFn:async()=>{
            const res = await fetch(`https://assignment-11-server-site-chi.vercel.app/review?email=${user.email}`,{
                headers:{
                    'content-type':'application/json',
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                },
            })
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            const data = res.json();
            return data;
        }
    })
    useEffect(()=>  SetReview(review.length),[SetReview, review.length])
    const Delete =(service)=>{
        fetch(`https://assignment-11-server-site-chi.vercel.app/delete/${service}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json',
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=> res.json())
        .then(data=>{
            if (data.deletedCount > 0) {
                toast.success('Delete Successfully !!')
                refetch()
            }         
        })}

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 mx-12 gap-3 '>
        {review &&
        review?.map(p=><EditReview setModalData={setModalData}
             Delete={Delete} key={p._id} review={p} ></EditReview>)
      }
         {modalData &&
            <ReviewModal refetch={refetch} modalData={modalData} setModalData={setModalData}
            ></ReviewModal>}
    </div>
    );
};

export default ReviewUser;