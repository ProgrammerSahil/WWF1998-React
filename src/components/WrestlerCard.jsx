import "./styles/WrestlerCard.css"

function WrestlerCard(props){
    return(
        <>
            <div className="mainWrestlerCard">
                <img src={`./src/assets/wrestlers/${props.photo}`} alt={props.name} className="wrestlerPhoto" />
                <h3 className="wrestlerName">{props.name}</h3>
            </div>
        </>
    )
}

export default WrestlerCard;