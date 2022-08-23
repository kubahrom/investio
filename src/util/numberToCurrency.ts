export const numberToCurrency = (number: number) => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
  }).format(number);
};

export const numberToPercent = (number: number) => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'percent',
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 4,
  }).format(number * 0.01);
};
