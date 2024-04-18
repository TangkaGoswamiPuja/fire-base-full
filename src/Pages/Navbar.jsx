import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthFile/Auth";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignout = () => {
    logOut()
      .then()
      .catch()

  }

  const links = <>
    <li  ><NavLink to="/">Home</NavLink></li>
    {user &&
      <> <li><NavLink to='/update'>Update Profile</NavLink></li>
        <li><NavLink to='/user'>user profile</NavLink></li></>
    }
    <li><NavLink to='/sq'>Year</NavLink></li>
    <li><NavLink to="/not">Find</NavLink></li>




  </>
  return (
    <div className="ml-5 mr-5 mt-10 p-2" >
      <div className="navbar bg-cyan-200 rounded-xl ">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img src="https://i.ibb.co/9WjMypq/icons8-building-50.png" alt="" />
            <p className="text-4xl font-semibold ">Dream Home</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">

          {user ?
            <>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar dropdown dropdown-hover">

                <div className="w-10 rounded-full">
                  <img alt="" src={user.photoURL} /> </div>
                <ul className="dropdown-content p-2 mt-2 border ">
                  <li className="mr-10">{user.email}</li>
                </ul>

              </div>
              <button onClick={handleSignout} className="btn btn-outline btn-info">SignOut</button></>
            : <Link to="/login" className="btn btn-outline btn-info">Login</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;