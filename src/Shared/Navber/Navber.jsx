import { Link } from "react-router-dom";
const Navber = () => {
    return (
        <div>
            <div className=" flex justify-between  items-center bg-base-300">
                <div className="">
                    <a className="btn btn-ghost normal-case text-4xl font-semibold text-indigo-500">TOYLAND</a>
                </div>
                <div className="gap">
                    <Link className="pr-3" to='/'>Home</Link>
                    <Link className="pr-3" to='/blogs'>Blogs</Link>
                    <Link className="pr-3" to='/login'>Login</Link>
                    <Link className="pr-3" to='/signup'>SignUp</Link>
                </div>

                    <div className="">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>

                    </div>
            </div>
        </div>
    );
};

export default Navber;