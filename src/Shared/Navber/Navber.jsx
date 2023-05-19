import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
const Navber = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out successfully');

            })
            .catch(err => console.log(err.massge))
    }


    return (
        <div>
            <div className=" flex justify-between  items-center bg-base-300 py-5">
                <div className=" flex ml-4 gap-3 items-center">
                    <img className="w-16 rounded-2xl" src="https://img.freepik.com/free-vector/different-kind-toys_1308-74241.jpg?w=740&t=st=1684496851~exp=1684497451~hmac=0b0ac256b4b9211c99909f7a6de68e8d044d80ae1b13afb6a45da36c4da24eec" alt="" />
                    <Link to='/'><a className=" normal-case text-5xl font-semibol"><span className="text-red-600">K</span><span className="text-green-600">I</span><span className="text-blue-600">D</span><span className="text-orange-600">S</span><span className="text-purple-600">Life</span></a></Link>
                </div>
                <div className="flex gap-4 text-xl font-semibold">
                    <NavLink className="{({isActive})=> (isActive ? 'font-semibold text-primary' : 'default')}" to='/'>Home</NavLink>
                    <NavLink className="({isActive})=> (isActive ? 'font-semibold text-primary' : 'default')}" to='/alltoys'>All Toys</NavLink>
                    {
                        user?.email?
                            <>
                                <NavLink className="({isActive})=> (isActive ? 'font-semibold text-primary' : 'default')}" to='/mytoys'>My Toys</NavLink>
                                <NavLink className="({isActive})=> (isActive ? 'font-semibold text-primary' : 'default')}" to='/addatoy'>Add A Toy</NavLink>
                            </>
                            :
                            <NavLink className="({isActive})=> (isActive ? 'font-semibold text-primary' : 'default')}" to='/login'>Login</NavLink>
                    }
                    <NavLink className="({isActive})=> (isActive ? 'font-semibold text-primary' : 'default')}" to='/blogs'>Blogs</NavLink>

                </div>

                <div className="navber-end">
                    {
                        user?.email &&
                        <>
                            <div className="avatar mr-5 flex gap-4 items-center  tooltip tooltip-left tooltip-neutral" data-tip={user?.displayName}>
                                <div className="w-11 rounded-full ring">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                <button className="btn btn-outline btn-error btn-sm mr-12" onClick={handleSignOut}>LogOut</button>
                            </div>

                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;