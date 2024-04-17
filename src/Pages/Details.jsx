import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthFile/Auth';
import { Helmet } from 'react-helmet';

import { FaMapLocationDot } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { FaSackDollar} from "react-icons/fa6";
import { GiBed } from "react-icons/gi";
import { GiBathtub,GiMechanicGarage } from "react-icons/gi";
import { FaLandmark } from "react-icons/fa6";


const Details = () => {
    const{homes } = useContext(AuthContext)
    const {id} =useParams()
    const idInt = parseInt(id)
    const detail = homes.find(detail => detail.id === idInt)
    
    const {image,estate_title, segment_name, description, price, status, area, location, facilities,year_built,bedrooms,bathrooms,garage,amenities,lot_size } = detail

    return (
        <div className='mt-40 mb-10 lg:mt-10'>
            <Helmet>
                <title>
                    Details
                </title>
            </Helmet>
           
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='card-body'>
    <h2 className="card-title text-5xl font-semibold">{estate_title}</h2>
                   

                   <p className="text-sm font-light bg-blue-100 p-3 rounded-lg">{description}</p>      

                    {/*segment_name  */}
                    <div className=" flex gap-3"> <kbd className="kbd   ">{segment_name}</kbd><kbd className="kbd  ">{status}</kbd></div>

<div className="w-20"> <kbd className="kbd  ">{year_built}</kbd></div>

{/* facility */}

<div className="flex  gap-3 mt-3 mb-3">
 {facilities.map((facilities, index) => (
              <div key={index} className="badge badge-info badge-outline">{facilities}</div>
            ))}
</div>

{/* facility */}

<div className="flex gap-3 mt-3 mb-3">
 {amenities.map((amenities, index) => (
              <div key={index} className="badge badge-info badge-outline">{amenities}</div>
            ))}
</div>

<hr></hr>
                    {/* price */}
                    <div className="flex items-center mt-5">
                        <div className="rating  gap-3" >
                            <FaSackDollar
                                className="text-4xl " />
                            <p className="bg-blue-100 p-2 rounded-lg">{price}</p> </div>
                    </div>    
{/* location */}
                    <div className="flex mt-3">
                        <div className="rating  gap-3" >
                            <FaMapLocationDot
                                className="text-4xl" />
                            <p className="bg-blue-100 p-2 rounded-lg">{location}</p> </div>
                    </div>

                    {/* area */}
                    <div className="flex mt-3">
                        <div className="rating  gap-3" >
                            <FaRulerCombined
                                className="text-4xl" />
                            <p className="bg-blue-100 p-2 rounded-lg">{area}sq ft</p> </div>
                    </div>
                    
  {/*  bedrooms  */}
  <div className="flex mt-3">
                        <div className="rating  gap-3" >
                        <GiBed
                                className="text-4xl" />
                            <p className="bg-blue-100 p-2 rounded-full">{ bedrooms }</p> </div>
                    </div>

                    {/*  bathrooms */}
  <div className="flex mt-3">
                        <div className="rating  gap-4" >
                        <GiBathtub 

                                className="text-4xl" />
                            <p className="bg-blue-100 p-2 rounded-full">{ bathrooms }</p> </div>
                    </div>
                    {/*  garage  */}
  <div className="flex mt-3">
                        <div className="rating  gap-4" >
                            <GiMechanicGarage
                                className="text-4xl" />
                            <p className="bg-blue-100 p-2 rounded-full">{ garage }</p> </div>
                    </div>
                    {/* lot_size  */}
  <div className="flex mt-3 ">
                        <div className="rating  gap-4" >
                            <FaLandmark
                                className="text-4xl" />
                            <p className="bg-blue-100 p-2 rounded-full">{ lot_size }</p> </div>
                    </div>

     
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;