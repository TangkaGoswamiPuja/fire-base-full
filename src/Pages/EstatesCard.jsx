import { FaMapLocationDot } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";



const EstatesCard = ({ home }) => {
    const {id, image, estate_title, segment_name, description, price, status, area, location, facilities,year_built } = home
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-full h-96 ">
                <figure className="w-1/2 "><img className=" h-full" src={image} alt="home" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    {/*segment_name  */}
                   <div className=" flex gap-3"> <kbd className="kbd  ">{segment_name}</kbd><kbd className="kbd  ">{status}</kbd></div>

                   <div className="w-20"> <kbd className="kbd  ">{year_built}</kbd></div>

{/* facility */}

<div className="flex gap-2">
facilities: {facilities.map((facilities, index) => (
              <div key={index} className="badge badge-primary badge-outline">{facilities}</div>
            ))}
</div>



                    <hr></hr>
                    {/* price */}
                    <div className="flex">
                        <div className="rating  gap-2" >
                            <FaSackDollar
                                className="text-2xl" />
                            <p>{price}</p> </div>
                    </div>    
{/* location */}
                    <div className="flex">
                        <div className="rating  gap-2" >
                            <FaMapLocationDot
                                className="text-2xl" />
                            <p>{location}</p> </div>
                    </div>

                    {/* area */}
                    <div className="flex">
                        <div className="rating  gap-2" >
                            <FaRulerCombined
                                className="text-2xl" />
                            <p>{area}sq ft</p> </div>
                    </div>
                    {/* button */}
                    <div className="card-actions justify-end">
                       <Link to={`/details/${id}`}> <button className="btn btn-primary">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstatesCard;