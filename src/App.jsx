import offers from "./data.js"
import Card from "./components/Card.jsx"
import getDetails from "./components/Details.jsx"

function App() {
    const minRate = Math.min(...offers.map(o => o.interestRate))

    return (
        <>
            {offers.map(offer => {
                const isRecommended = offer.interestRate === minRate;
                return (
                    <Card
                        key={offer.id}
                        offer={offer}
                        isRecommended={isRecommended}
                        onClick={() => getDetails(offer, isRecommended)}
                    />
                );
            })}
            <div id="details"></div>
        </>
    )
}

export default App
