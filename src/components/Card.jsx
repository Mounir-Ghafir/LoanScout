import "./Card.css"

function Card({offer , onClick , isRecommended}) {
    return(
        <div className="loan-card" onClick={onClick}>
            <div className="card-info">
                <h1>{offer.provider}</h1>
                <p>Up to €{offer.amount.toLocaleString()}</p>
            </div>
            <div className="card-meta">
                <p>Rate: <strong>{offer.interestRate}%</strong></p>
                {isRecommended && <span className="recommend-badge">Best Rate</span>}
            </div>
        </div>
    )
}

export default Card
