import { getMonthlyPayment, getTotalCost, getTotalInterest } from './Culc.jsx'
import "./Details.css"

function getDetails(offer, isRecommended) {    
    const target = document.getElementById("details")
    
    const monthlyPayment = getMonthlyPayment(offer.amount, offer.interestRate, offer.durationYears);
    const totalCost = getTotalCost(monthlyPayment, offer.durationYears);
    const totalInterest = getTotalInterest(totalCost, offer.amount);

    target.innerHTML = `
        <div class="details-panel">
            <div class="details-header">
                <div>
                    <h1>${offer.provider}</h1>
                    <p>Loan breakdown for ${offer.durationYears} years</p>
                </div>
                ${isRecommended ? '<span class="recommend-badge">Recommended</span>' : ''}
            </div>
            
            <div class="calc-section">
                <div class="calc-item">
                    <span class="calc-label">Monthly Payment</span>
                    <span class="calc-value highlight">€${monthlyPayment.toFixed(2)}</span>
                </div>
                <div class="calc-item">
                    <span class="calc-label">Total Interest</span>
                    <span class="calc-value">€${totalInterest.toFixed(2)}</span>
                </div>
                <div class="calc-item">
                    <span class="calc-label">Total Repayment</span>
                    <span class="calc-value">€${totalCost.toFixed(2)}</span>
                </div>
            </div>

            <div class="details-footer">
                <p>Principal: €${offer.amount.toLocaleString()}</p>
                <p>Annual Interest Rate: ${offer.interestRate}%</p>
            </div>
        </div>
    `
}

export default getDetails
