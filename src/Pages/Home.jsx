import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import  { useContext } from 'react';
import { AuthContext } from '../AuthFile/Auth';
import EstatesCard from './EstatesCard';
import { Helmet } from 'react-helmet';

const Home = () => {
    const {homes}= useContext(AuthContext)
    return (
        <div >
           
           <Helmet>
            <title>Dream Home | Home</title>
           </Helmet>
            <Banner></Banner>
<div className='grid grid-cols-1 lg:grid-cols-1 gap-5'>

            {
                homes.map(home=> <EstatesCard key={home.id} 
                home={home}></EstatesCard>)
            }
</div>
           
        </div>
    );
};

export default Home;