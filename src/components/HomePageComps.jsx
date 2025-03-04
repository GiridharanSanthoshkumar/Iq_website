import HomePage from "./Home/HomePage";
import About from "./About";
import EventDisplay from "./EventDisplay";
import Footer from "./Footer";

const HomePageComps = () => {
    return <div>
        <HomePage></HomePage>
        <div style={{background: "linear-gradient(135deg, #063748f5, #000000f5, #000000, #063748f5)"}}>
        <About></About>
            <EventDisplay></EventDisplay>
            <Footer></Footer>
            
        </div>
    </div>
}
export default HomePageComps;