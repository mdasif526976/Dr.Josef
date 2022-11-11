import React, { useEffect, useState } from 'react';
import Review from '../review/Review';

const PeopleReview = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    },[])
    console.log(data)
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
            data.map(p=><Review key={p._id} review={p}></Review>)
}
        </div>
    );
};

export default PeopleReview;