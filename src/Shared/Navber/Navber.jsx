import { Link } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";


const Navber = () => {
    return (
        <div>
            <div className=" flex justify-between  items-center bg-base-300">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">khlh</a>
                </div>
                <div>
                    <Link className="pr-3" to='/home'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>

                    <div className="">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>

                    </div>
            </div>
            <Home></Home>
        </div>
    );
};

export default Navber;