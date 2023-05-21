/* eslint-disable react/jsx-key */



import { useEffect, useState } from "react";
import ToyTable from "./ToyTable";


const AllToys = () => {

    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    })

    return (
        <div className="my-5 mx-10">
            <h1 className="text-3xl text-center font-bold mb-5 text-green-600">ALL TOYS :-</h1>

            {/* Search box  */}
            <div className=" mb-5 mt-7">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className=" text-start input px-36 input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            {/* head */}
            <thead className=" overflow-x-auto w-full">
                <tr className="flex gap-32">
                    <th>Seller</th>
                    <th className="">Toy Name</th>
                    <th >Sub Category</th>
                    <th className="ml-6">Price</th>
                    <th className="ml-4">Available Quantity</th>
                </tr>
            </thead>
           <tbody>
           {
                allToys.map(toy => <ToyTable toy={toy} />)
            }
           </tbody>
            


        </div>
    );
};

export default AllToys;