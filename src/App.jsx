import offers from "./data.js"
import Card from "./components/Card.jsx"
import getDetails from "./components/Details.jsx"
import "./App.css"

function App() {
    const minRate = Math.min(...offers.map(o => o.interestRate))

    return (
        <div className="app-container">
            <header className="header">
                <h1>Loan Comparison Tool</h1>
                <p>Select a bank offer to see the full breakdown</p>
            </header>
            
            <main className="main-content">
                <div className="offers-list">
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
                </div>
                <div id="details"></div>
            </main>
        </div>
    )
}

export default App
