import React from "react";
import withCounter, { WithCounterCosumer } from "../HOC/withCounter";
import withLoading from "../HOC/withLoading";
import { getDefaultStockCounter } from "../services/stock.api";
import { useCounter } from "../hooks/useCounter";
import { mystore } from '../MyRedux/MyRedux';
import {
  myconnect,
  useMySelector,
  useMyDispatch,
} from '../MyReactRedux/MyReactRedux';
import { useForceUpdate } from '../hooks/useForceUpdate';

import { useStocks, useStocksUpdate } from "../context/StocksContext";




class BuyStock extends React.Component {

  render() {
    return (
      <section>
        <h1>BuyStock</h1>
        <div>How many Stonks would you like to buy?</div>
        <button type="button" onClick={this.props.handleIncrement} name="buy">
          Buy +
        </button>
        {this.props.isLoading ? (
          this.props.renderLoadingComponent("spinner")
        ) : (
          <span>{this.props.counter}</span>
        )}

        <button type="button" onClick={this.props.handleDecrement} name="sell">
          Sell -
        </button>
      </section>
    );
  }
}
// HOC hell
//const BuyStockContainer = withCounter()(withLoading(BuyStock));

const BuyStockContainer = withLoading((props) => (
  <WithCounterCosumer defaultCounter={7}>
    {(counter, handleIncrement, handleDecrement, handleSetCounter) => (
      <BuyStock
        {...props}
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleSetCounter={handleSetCounter}
      />
    )}
  </WithCounterCosumer>
));
export default BuyStockContainer;

// function

export const BuyStockFn = (props) => {
  // const [stock, hanldeBuy, hanldeSell] = useCounter(20);

  let stocks = useStocks();
  let updateStocks = useStocksUpdate(); 

  const removeStock = () => {
    updateStocks(stocks - 1);
  }

  const addStock = () => {
    updateStocks(stocks + 1);
  }

  return (
    <section>
      <h1>BuyStock</h1>
      <div>How many Stonks would you like to buy?</div>
      <button type="button" onClick={addStock} name="buy">
        Buy +
      </button>
      <span>{stocks}</span>
      <button type="button" onClick={removeStock} name="sell">
        Sell -
      </button>
    </section>
  );
};
