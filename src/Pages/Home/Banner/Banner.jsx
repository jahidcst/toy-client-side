
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-childhood-cancer-awareness-month-background-concepttoys_23-2149499365.jpg?w=900&t=st=1684388935~exp=1684389535~hmac=438f40268753595b95a5f87a60f3cb630daeef0e10a6273dc016bdbe590625b8")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-6xl font-bold ">Toys <br /><span> for Kids</span></h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline">About us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;