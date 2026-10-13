const priceFormatter = new Intl.NumberFormat('sr-Latn-RS', {
  style: 'currency',
  currency: 'RSD',
  maximumFractionDigits: 0,
});

export function formatPrice(price: number): string {
  return priceFormatter.format(price);
}
