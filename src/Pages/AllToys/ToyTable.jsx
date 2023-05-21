/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ToyTable = ({ toy }) => {
    // console.log(toy)
    const { picture_url, name, sub_category, price, available_quantity, _id } = toy;

    return (
        <div>
            <div className="table w-full">
                <table className="overflow-x-auto w-full">

                    <div> <div className="flex items-center">
                        <div className="flex items-center gap-24">
                            <div className="avatar">
                                <div className=" rounded-full w-12 h-12">
                                    <img src={picture_url} />
                                </div>
                            </div>
                            <h2 className="">{name}</h2>
                        </div>

                        <td className="flex ml-28 gap-28 ">
                            <p className="ml-10">{sub_category}</p>
                            <p className="ml-20"> {price}</p>
                            <p className="ml-28">{available_quantity}</p>
                        </td>

                        <th className="ml-20">
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-secondary">details</button>
                            </Link>
                        </th>
                    </div>
                    </div>




                </table>
            </div>
        </div>
    );
};

export default ToyTable;