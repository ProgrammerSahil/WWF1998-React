import "./styles/RosterPage.css"
import Header from "./Header";
import WrestlerCard from "./WrestlerCard";
import rosterPageImage from "../assets/homePageImage.jpeg"


function RosterPage(){
    return(
        <>
        <Header at="roster"/>
        <div className="rosterPage" style={{backgroundImage : "url(" + rosterPageImage + ")"}}>
            <WrestlerCard name="The Rock" photo="therock98.jpeg" />
            <WrestlerCard name="Stone Cold Steve Austin" photo="stonecold98.webp" />
            <WrestlerCard name="The Undertaker" photo="undertaker98.jpeg" />
            <WrestlerCard name="Shawn Michaels" photo="michaels98.jpeg" />
            <WrestlerCard name="Mankind" photo="mankind98.jpeg" />
            <WrestlerCard name="Ken Shemrock" photo="shemrock98.jpeg" />
            <WrestlerCard name="Owen Hart" photo="owenhart98.jpeg" />
            <WrestlerCard name="Kane" photo="kane98.jpeg" />
        </div>
        </>
    )
}

export default RosterPage;