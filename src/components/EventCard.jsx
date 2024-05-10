import "./styles/EventCard.css";

function EventCard(props){
    return (
        <>
            <div className="eventCard">
                <img src={`./src/assets/posters/${props.photo}`} alt={props.name} />
                <h4 className="EventHeading">{props.name}</h4>
            </div>
        </>
    )
}

export default EventCard;