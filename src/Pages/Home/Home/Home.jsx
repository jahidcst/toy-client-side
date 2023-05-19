import Banner from "../Banner/Banner";
import Section1 from "../ExtraSection/Section1";
import Section2 from "../ExtraSection/Section2";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;