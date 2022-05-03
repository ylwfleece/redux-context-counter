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

  constructor(props) {
    super(props);
    this.state = {internalValue: this.props.counterValue, order: 0};
  }

  setInternalValue(val) {
    this.setState({
      internalValue: val
    })
    if (val > this.props.counterValue) {
      this.props.hanldeAdd();
    } else if (val < this.props.counterValue) {
      this.props.hanldeSub();
    }
  }

  changeValue = (e) => {
    this.setInternalValue(Number(e.currentTarget.value));
  };

  render() {
    return (
      <section>
        <h1>Calculator</h1>
        <div>How many stonks do you have?</div>
        <input value={this.state.internalValue} onChange={this.changeValue} type="number" />
        <div>How many stonks would you like to buy?</div>
        <button onClick={() => {
            this.setState({ ...this.state, order: this.state.order + 1})
          }} name="buy" type="button">Buy + </button> {this.state.order}
        <button onClick={() => {
            this.setState({ ...this.state, order: this.state.order - 1})
          }} name="sell" type="button">Sell -</button>
        <div>you will have {this.state.order + this.state.internalValue} stonks after your purchase</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.value,
  };
};

const mapDispatchToProps = (dispatch, payload) => {
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
