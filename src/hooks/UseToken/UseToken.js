import { useEffect, useState } from 'react';

const UseToken = (email) => {
    const [token,setToken] = useState('');
    useEffect(()=>{
        if (email) {
        fetch(`https://assignment-11-server-site-chi.vercel.app /jwt?email=${email}`)
        .then(res=> res.json())
        .then(data=>{
            if (data.accessToken) {
                localStorage.setItem('accessToken',data.accessToken)
                setToken(data.accessToken)
            }
        })}
    },[email])

    return [token]
};

export default UseToken;