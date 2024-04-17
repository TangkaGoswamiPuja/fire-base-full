import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthFile/Auth';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log (user)
    return (
        <div className='mt-40 mb-10 flex justify-center lg:mt-20 '>
            <Helmet>
                <title>
                    Profile
                </title>
            </Helmet>
<div className="card w-96 glass shadow-xl p-3">
  <figure><img className='rounded-full' src={user.
photoURL} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">My Profile</h2>
    <p className='text-3xl'>  {user.
displayName
}</p>
<p className='text-sm text-center font-bold bg-cyan-200 p-1 rounded-lg'>  {user.email}</p>
   
  </div>
</div>

        </div>
    );
};

export default Profile;