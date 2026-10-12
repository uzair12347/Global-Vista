// Currency conversion — GlobalVest Capital
// Base currency: PKR

const EXCHANGE_RATE = 280; // 1 USD = 280 PKR

// Amount ko PKR me convert karein
export function toPKR(amount, fromCurrency) {
  const amt = parseFloat(amount) || 0;
  if (fromCurrency === 'USD') {
    return parseFloat((amt * EXCHANGE_RATE).toFixed(2));
  }
  return amt;
}

// Exchange rate get karein
export function getRate() {
  return EXCHANGE_RATE;
} 