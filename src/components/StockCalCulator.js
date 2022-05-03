import React from "react";

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
};
