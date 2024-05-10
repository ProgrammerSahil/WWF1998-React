import "./Home.css"
import pageImage from "../assets/homePageImage.jpeg"
import EventCard from "./EventCard";

function Home(props){
    return(
        <>
            <div className="Home" style={{backgroundImage : "url(" + pageImage + ")"}}>
                <h2 className="homeTitle">{props.homeTitle}</h2>
                <div className="eventDisplay">
                    <EventCard name="SummerSlam 1998" photo="summerslam98.jpg"/>
                    <EventCard name="WrestleMania 14" photo="wrestlemania98.jpg"/>
                </div>
            </div>
        </>
    );
}

export default Home;