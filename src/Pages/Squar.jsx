import { useContext } from "react";
import { AuthContext } from "../AuthFile/Auth";
import EstatesCard from "./EstatesCard";
import { Helmet } from "react-helmet";

const Squar = () => {
    const { year } = useContext(AuthContext)
    // console.log(year)
    return (
        <div className="mt-40 lg:mt-10">
            <Helmet>
                <title>
                    Year
                </title>
            </Helmet>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-5'>

                {
                    year.map(home => <EstatesCard key={home.id}
                        home={home}></EstatesCard>)
                }
            </div>
        </div>
    );
};

export default Squar;