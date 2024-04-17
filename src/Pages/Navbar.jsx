import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthFile/Auth";

const Navbar = () => {
  const {user, logOut } = useContext(AuthContext)
 const handleSignout = ()=>{
  logOut ()
    .then()
    .catch()
  
 }
  
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
   {user&&
   <> <li><NavLink to='/update'>Update Profile</NavLink></li>
   <li><NavLink to='/user'>user profile</NavLink></li></>
   }
    <li><NavLink to='/sq'>Year</NavLink></li>


       
      
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  
    {user? 
    <>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="" src={user.photoURL}/>
        </div>
      </div>
    <button onClick={handleSignout} className="btn">SignOut</button></>
    :     <Link to="/login" className="btn">Login</Link>
}
    
  </div>
</div> 
        </div>
    );
};

export default Navbar;