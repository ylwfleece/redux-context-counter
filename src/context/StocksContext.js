import React, { useContext, useState } from "react";

export const StocksContext = React.createContext();
const StocksUpdateContext = React.createContext();

export function useStocks() {
  return useContext(StocksContext);
}

export function useStocksUpdate() {
  return useContext(StocksUpdateContext);
}
export function StocksProvider({ children }) {
  const [stocks, setStocks] = useState(0);

  function updateStocks(stocks) {
    setStocks(stocks);
  }



  return (
    <StocksContext.Provider value={{stocks, updateStocks}}>
        {children}
    </StocksContext.Provider>
  //   <StocksContext.Provider value={stocks}>
  //   <StocksUpdateContext.Provider value={updateStocks}>
  //     {children}
  //   </StocksUpdateContext.Provider>
  // </StocksContext.Provider>
  );
}
