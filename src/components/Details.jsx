import { getMonthlyPayment, getTotalCost, getTotalInterest } from './Culc.jsx'

function getDetails(offer, isRecommended) {    
    const target = document.getElementById("details")
    
    const monthlyPayment = getMonthlyPayment(offer.amount, offer.interestRate, offer.durationYears);
    const totalCost = getTotalCost(monthlyPayment, offer.durationYears);
    const totalInterest = getTotalInterest(totalCost, offer.amount);

    target.innerHTML = `
        <div>
            <div>
                <h1>${offer.provider}</h1>
                ${isRecommended ? '<span>RECOMMENDED</span>' : ''}
            </div>
            <p>Duration: ${offer.durationYears} years</p> 
            
            <div>
                <p>Monthly Payment: €${monthlyPayment.toFixed(2)}</p>
                <p>Total Cost: €${totalCost.toFixed(2)}</p>
                <p>Total Interest: €${totalInterest.toFixed(2)}</p>
            </div>

            <div>
                <p>Loan Amount: €${offer.amount.toLocaleString()}</p>
                <p>Interest Rate: ${offer.interestRate}%</p>
            </div>
        </div>
    `
}

export default getDetails
