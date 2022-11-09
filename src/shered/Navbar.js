import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authproovider/AuthProvidor';

const Navbar = () => {
    const {review} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-2xl">Dr.Josef</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
    <ul className='md:flex mr-10 hidden'>
<Link to='/' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Home</Link>
<Link to='/service' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Services</Link>
<Link to='/review' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>
    <div className='relative'>
      <div>
        <p className='absolute left-3/4 bottom-4 bg-sky-500 px-2
         rounded-full text-white'>{review}</p>
      </div>
      <div>
        <h1>Reviews</h1>
      </div>
    </div>
    </Link>
<Link to='/login' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Login</Link>
<Link to='/signup' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>SignUp</Link>
<Link to='/about' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>About</Link>
<Link to='/blog' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Blogs</Link>
    </ul>
    </div>
    <div>
        <img src='https://placeimg.com/80/80/people' alt=''></img>
    </div>
    <div className="dropdown dropdown-end md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;