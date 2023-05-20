import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1636838258291-104f8399c2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1904&q=80")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white ">
                    <h1 className="mb-5 text-6xl font-bold  ">Legos<span> for Kids</span></h1>
                    <p className="mb-5  font-bold">LEGO sets are popular and iconic construction toys loved by children and adults alike. Each LEGO set consists of small plastic bricks and various pieces that can be assembled and interconnected to create different structures, vehicles, buildings, and more..</p>
                    <Link to='/login' className="btn btn-secondary hover:bg-teal-950"> Explore More</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;