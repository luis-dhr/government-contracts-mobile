export function getCurrencyValue (value: { amount: number, currency: string }) {
  return `${value.amount} ${value.currency}`
}
