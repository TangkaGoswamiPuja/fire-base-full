import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Error
                </title>
            </Helmet>
             <div className="text-5xl ">
            404 Not Found  
             </div>
            
            <Link className="underline" to="/"> Go back to home</Link>
     
       </div>
       
    );
};

export default Error;