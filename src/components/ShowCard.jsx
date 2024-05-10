import "./styles/ShowCard.css";

function ShowCard(props){
    return (
        <>
            <div className="mainCard">
                <img src={`./src/assets/weeklyShowsLogo/${props.photo}`} alt={props.name} />
                <h4 className="EventHeading">{props.name}</h4>
            </div>
        </>
    )
}

export default ShowCard;