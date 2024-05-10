import "./styles/Home.css"
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
                    <EventCard name="King of the Ring 1998" photo="kingofthering98.jpeg"/>
                    <EventCard name="Survivor Series 1998" photo="survivorseries98.jpeg"/>
                </div>
            </div>
        </>
    );
}

export default Home;