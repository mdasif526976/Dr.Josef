import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authproovider/AuthProvidor';

const Navbar = () => {
    const {review,user,logOut} = useContext(AuthContext)
    console.log(user.photoURL)
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
<Link to='/services' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Services</Link>
{
    user.uid?
   <>
    <Link to='/review' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>
    <div className='relative'>
      <div>
        <p className='absolute left-3/4 bottom-4 bg-sky-500 px-2
         rounded-full text-white'>{review}</p>
      </div>
      <div>
        <h1>My Reviews</h1>
      </div>
    </div>
    </Link>
    <button onClick={logOut} className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Logout</button>
   </>
    :
    <>
    <Link to='/login' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Login</Link>
<Link to='/signup' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>SignUp</Link>
    </>
}
<Link to='/about' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>About</Link>
<Link to='/blog' className='mr-6 hover:bg-sky-400 hover:text-white  py-2 px-4 rounded'>Blogs</Link>
    </ul>
    </div>
    <div>
        {user.uid &&
            <img className='w-24 h-24 p-3 rounded-full hidden md:visible' src={user.photoURL} alt=''></img>
        }
    </div>
    <div className="dropdown dropdown-end md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {user.uid ?<>
            <img className='w-36 h-36 p-3 rounded-full' src={user.photoURL} alt=''></img>
            </>
            :<div>
                <svg className="swap-off fill-current" 
                xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
            </div>
        }
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