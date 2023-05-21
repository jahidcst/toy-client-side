/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyToys = () => {
    const [toys, setToys] = useState([])
    const [search, setSearch] = useState('')

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:7000/myToys/${user?.email}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [user]);
    return (
        <div>
            <h1>My ALL JOBS: {toys.length}</h1>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" onChange={(e) => setSearch(e.target.value) } placeholder="Search…" className="input input-bordered" /> {" "}
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Toy name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sub Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy) => {
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {toy.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {toy.sub_category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {toy.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {toy.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:bg-gray">Delete</a></button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;