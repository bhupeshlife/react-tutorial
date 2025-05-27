import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `http://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency.toLowerCase()]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
