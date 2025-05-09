// src/utils/formatCurrency.ts
import { useCurrency } from '../contexts/CurrencyContext';

export function useFormatCurrency() {
  const { currency, rate } = useCurrency();
  return (amountInUSD: number) => {
    const converted = amountInUSD * rate;
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
    }).format(converted);
  };
}
