import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  //   const convertCurrency = () => {
  //     setConvertedAmount(amount * currencyInfo(toCurrency));
  //   };

  const convertCurrency = () => {
    const rate = currencyInfo[toCurrency.toLowerCase()];
    if (rate) {
      setConvertedAmount(amount * rate);
    } else {
      setConvertedAmount(0);
      console.error("Invalid conversion rate");
    }
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-blue-200">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-400 rounded-lg p-5 backdrop-blur-sm bg-white/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectedCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectedCurrency={toCurrency}
                amountDisabled
              />
            </div>
            <button className="w-full bg-blue-600 text-white mt-2 px-4 py-3 rounded-lg">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
