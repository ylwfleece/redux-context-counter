import React, { useState, useEffect } from "react";
import { useStocks, useStocksUpdate } from "../context/StocksContext";
import { useCounter } from "../hooks/useCounter";
import { mystore } from "../MyRedux/MyRedux";
import {
  myconnect,
  useMySelector,
  useMyDispatch,
} from "../MyReactRedux/MyReactRedux";
import { useForceUpdate } from "../hooks/useForceUpdate";

class StockCalCulator extends React.Component {
  changeVal(e) {
    this.props.counterValue = Number(e.target.value)
  }
  render() {
    return (
      <section>
        <h1>Calculator</h1>
        <div>How many stonks do you have?</div>
        <input value={this.props.counterValue} onChange={this.changeVal} type="number" />
        <div>How many stonks would you like to buy?</div>
        <button onClick={() => {
            this.props.hanldeAdd();
          }} name="buy" type="button">Buy + </button> {0}
        <button onClick={() => {
            this.props.hanldeSub();
          }} name="sell" type="button">Sell -</button>
        <div>you will have 0 stonks after your purchase</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hanldeAdd: () => dispatch({ type: 'COUNTER_ADD' }),
    hanldeSub: () => dispatch({ type: 'COUNTER_SUB' }),
  };
};

const storeConnect = myconnect(mapStateToProps, mapDispatchToProps);

export default storeConnect(StockCalCulator);


export const StockCalCulatorFn = () => {
  let stocks = useStocks();
  const updateStocks = useStocksUpdate();

  const [order, setOrder] = useState(0);

  const updateStocksFn = (e) => {
    const newStocksCount = Number(e.target.value);
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
      <input value={stocks} type="number" onChange={updateStocksFn}/>
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
