import "./styles/Home.css";
import Header from "./Header";
import homePageImage from "../assets/homePageImage.jpeg";
import EventCard from "./EventCard";
import ShowCard from "./ShowCard";

function Home(props) {
  return (
    <>
      <Header at="home" />
      <div
        className="Home"
        style={{ backgroundImage: "url(" + homePageImage + ")" }}
      >
        <h2 className="homeTitle">{props.homeTitle1}</h2>
        <div className="eventDisplay">
          <EventCard name="SummerSlam 1998" photo="summerslam98.jpg" />
          <EventCard name="WrestleMania 14" photo="wrestlemania98.jpg" />
          <EventCard
            name="King of the Ring 1998"
            photo="kingofthering98.jpeg"
          />
          <EventCard
            name="Survivor Series 1998"
            photo="survivorseries98.jpeg"
          />
        </div>
        <h2 className="homeTitle">{props.homeTitle2}</h2>
        <div className="eventDisplay">
          <ShowCard name="Monday Night Raw" photo="raw98.png" />
          <ShowCard name="Sunday Night Heat" photo="heat98.png" />
        </div>
      </div>
    </>
  );
}

export default Home;
