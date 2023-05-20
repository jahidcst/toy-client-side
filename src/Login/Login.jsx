import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';


const Login = () => {

  const { signIn, google } = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(location?.state?.from.pathname || '/')
      })
      .catch(error => console.log(error))

    form.reset();
  }
  const handleGoogle = () => {
    google()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser)
            navigate(location?.state?.from.pathname || '/')
        })
        .catch(error => {
            console.log(error.message)
        })
}

  return (
    <div>
      <div className="  bg-base-200">
        <div className="hero-content flex-col">

          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
            <div className="card-body">
              <div className="text-center ">
                <h1 className="text-3xl font-bold pb-5">Login</h1>
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" name="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
                </div>
                <div>
                  <div className="divider">OR</div>
                  <p className=" text-center">Login With</p>
                  <div className="flex gap-24 ml-16 mt-7 text-2xl">
                    <button><p><FaFacebook /></p></button>
                    <button onClick={handleGoogle}><p><FaGoogle /></p></button>
                    <button><p><FaTwitter /></p></button>
                  </div>
                </div>
              </form>
              <p className="my-4 text-center">New to Toy Land? <Link className="text-blue-600 font-bold" to='/signup'>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;