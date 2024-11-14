import "../Card/card.css";

const Card = ({ color, text }) => {
    return (
        <div className="card">
            <p style={{ color: color }}>{text.toUpperCase()}</p>
        </div>
    )
}

export default Card;
