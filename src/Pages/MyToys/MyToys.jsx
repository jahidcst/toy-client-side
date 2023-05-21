/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToysRow from "./ToysRow";
import Swal from "sweetalert2";


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


// --------------------data delete----------------
    const handleDelete = id => {
        fetch(`http://localhost:7000/allToys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    const remaining = toys.filter(toy => toy._id !== id)
                    setToys(remaining)
                }
            })
    };


// -----------------------data update----------------
    const handleUpdate = id => {
        fetch(`http://localhost:7000/allToys/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'update'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                Swal.fire({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('Saved!', '', 'success')
                    } else if (result.isDenied) {
                      Swal.fire('Changes are not saved', '', 'info')
                    }
                  })
                  const remaining = toys.filter(toy => toy._id !== id);
                  const updated = toys.find(toy => toy._id === id);
                  updated.status = 'confirm'
                  const newToys = [updated, ...remaining];
                  setToys(newToys);
            }
        })
    }

    return (
        <div>
            <h1>My ALL JOBS: {toys.length}</h1>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search…" className="input input-bordered" /> {" "}
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-white dark:text-gray-400">
                    <thead className="text-lg text-green-400 uppercase bg-blue-950 dark:text-white">
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
                            toys.map((toy) => <ToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></ToysRow>)

                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;