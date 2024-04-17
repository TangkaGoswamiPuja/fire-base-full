import { FaMapLocationDot } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";



const EstatesCard = ({ home }) => {
    const {id,  image, estate_title, segment_name, description, price, status, area, location, facilities,year_built } = home
    return (
        <div className="mt-5 mb-8">
            <div data-aos="fade-left"
     data-aos-duration="2000" className="card card-side bg-base-100 shadow-xl w-full h-96 ">
                <figure className="w-1/2 "><img className=" h-full" src={image} alt="home" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-semibold">{estate_title}</h2>
                   

                    <p className="text-sm font-light bg-blue-100 p-2 rounded-lg">{description}</p>
                    {/*segment_name  */}
                   <div className=" flex gap-3"> <kbd className="kbd   ">{segment_name}</kbd><kbd className="kbd  ">{status}</kbd></div>

                   <div className="w-20"> <kbd className="kbd  ">{year_built}</kbd></div>

{/* facility */}

<div className="flex gap-2">
 {facilities.map((facilities, index) => (
              <div key={index} className="badge badge-info badge-outline">{facilities}</div>
            ))}
</div>



                    <hr></hr>
                    {/* price */}
                    <div className="flex items-center">
                        <div className="rating  gap-2" >
                            <FaSackDollar
                                className="text-2xl " />
                            <p className="bg-blue-100 p-1 rounded-lg">{price}</p> </div>
                    </div>    
{/* location */}
                    <div className="flex">
                        <div className="rating  gap-2" >
                            <FaMapLocationDot
                                className="text-2xl" />
                            <p className="bg-blue-100 p-1 rounded-lg">{location}</p> </div>
                    </div>

                    {/* area */}
                    <div className="flex">
                        <div className="rating  gap-2" >
                            <FaRulerCombined
                                className="text-2xl" />
                            <p className="bg-blue-100 p-1 rounded-lg">{area}sq ft</p> </div>
                    </div>
                    {/* button */}
                    <div className="card-actions justify-end -mt-6">
                       <Link to={`/details/${id}`}> <button className="btn btn-info btn-outline ">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstatesCard;