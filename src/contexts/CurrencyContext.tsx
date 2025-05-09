// src/contexts/CurrencyContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CurrencyContextValue {
  currency: string;
  rate: number;
  setCurrency: (c: string) => void;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: 'USD',
  rate: 1,
  setCurrency: () => {}
});

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<string>(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem('currency') || 'USD'
      : 'USD'
  );
  const [rate, setRate] = useState<number>(1);

    useEffect(() => {
    localStorage.setItem('currency', currency);

    // frankfurter.app is entirely free and keyless
    fetch(`https://api.frankfurter.app/latest?from=USD&to=${currency}`)
        .then(res => res.json())
        .then(data => {
        // data.rates looks like { "EUR": 0.9183 }
        const fetched = data.rates?.[currency];
        setRate(typeof fetched === 'number' ? fetched : 1);
        })
        .catch(err => {
        console.error('Rate fetch failed:', err);
        setRate(1);
        });
    }, [currency]);


  return (
    <CurrencyContext.Provider value={{ currency, rate, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
