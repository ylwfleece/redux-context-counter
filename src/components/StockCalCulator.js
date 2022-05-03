import React, { useState, useEffect } from "react";
import { useStocks, useStocksUpdate } from "../context/StocksContext";

class StockCalCulator extends React.Component {
  render() {
    return (
      <section>
        <h1>Calculator</h1>
        <div>How many stonks do you have?</div>
        <input type="number" />
        <div>How many stonks would you like to buy?</div>
        <button type="button">Buy + </button> {0}
        <button type="button">Sell -</button>
        <div>you will have 0 stonks after your purchase</div>
      </section>
    );
  }
}

export default StockCalCulator;

export const StockCalCulatorFn = () => {
  let stocks = useStocks();
  let updateStocks = useStocksUpdate();

  const [order, setOrder] = useState(0);

  const updateStocksFn = (e) => {
    let newStocksCount = Number(e.target.value);
    updateStocks(newStocksCount)
  }

  const addOrder = () => {
    setOrder(order + 1);
  };
  const decreaseOrder = () => {
    setOrder(order - 1);
  };

  return (
    <section>
      <h1>Calculator</h1>
      <div>How many stonks do you have?</div>
      <input placeholder={stocks} type="number" onChange={updateStocksFn}/>
      <div>How many stonks would you like to buy?</div>
      <button onClick={addOrder} type="button">
        Buy +{" "}
      </button>{" "}
      {order}
      <button onClick={decreaseOrder} type="button">
        Sell -
      </button>
      <div>you will have {stocks + order} stonks after your purchase</div>
    </section>
  );
};
