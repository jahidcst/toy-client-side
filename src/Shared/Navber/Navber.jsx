import { Link } from "react-router-dom";
const Navber = () => {
    return (
        <div>
            <div className=" flex justify-between  items-center bg-base-300">
                <div className="">
                    <Link to='/'><a className="  normal-case text-4xl font-semibold text-indigo-500">TOYLAND</a></Link>
                </div>
                <div className="gap">
                    <Link className="pr-3 hover:text-purple-700" to='/'>Home</Link>
                    <Link className="pr-3" to='/alltoys'>All Toys</Link>
                    <Link className="pr-3" to='/mytoys'>My Toys</Link>
                    <Link className="pr-3" to='/addatoy'>Add A Toy</Link>
                    <Link className="pr-3" to='/blogs'>Blogs</Link>
                    <Link className="pr-3" to='/login'>Login</Link>
                    

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