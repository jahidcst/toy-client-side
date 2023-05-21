/* eslint-disable react/prop-types */




const ToysRow = ({ toy, handleDelete, handleUpdate }) => {

    const { name, sub_category, price, available_quantity, _id } = toy;

    

    return (
        <div>
            <tr className="border-b">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap  text-white">
                    {name}
                </th>
                <td className="px-6 py-4">
                    {sub_category}
                </td>
                <td className="px-6 py-4">
                    {price}
                </td>
                <td className="px-6 py-4">
                    {available_quantity}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleDelete(_id)}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:bg-gray">Delete</a></button>

                    <button onClick={() => handleUpdate(_id)} className="font-medium text-green-400 ml-5">Update</button>
                </td>
            </tr>
        </div>
    );
};

export default ToysRow;