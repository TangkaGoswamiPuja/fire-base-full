import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthFile/Auth';
import { Helmet } from 'react-helmet';

const Details = () => {
    const{homes } = useContext(AuthContext)
    const {id} =useParams()
    const idInt = parseInt(id)
    const detail = homes.find(detail => detail.id === idInt)
    
    const {image,estate_title} = detail

    return (
        <div>
            <Helmet>
                <title>
                    Details
                </title>
            </Helmet>
           this is delai {id}
           <div className="bg-gray-200 p-20 pl-32">
    <img className="w-96 h-96" src={image} alt="" />
    <p>{estate_title}</p>
</div>
        </div>
    );
};

export default Details;