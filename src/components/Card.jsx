function Card({offer , onClick , isRecommended}) {
    return(
        <div onClick={onClick}>
            <h1>{offer.provider}</h1>
            <p>{offer.amount}</p>
            <p>{offer.interestRate}</p>
            {isRecommended && <p>recommend</p>}
        </div>
    )
}

export default Card
