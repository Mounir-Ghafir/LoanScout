
export function getMonthlyPayment(amount, annualRate, years) {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    return (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

export function getTotalCost(monthlyPayment, years) {
    return monthlyPayment * years * 12;
}

export function getTotalInterest(totalCost, amount) {
    return totalCost - amount;
}
