import React, { useEffect } from "react";
import withCounter, { WithCounterCosumer } from "../HOC/withCounter";
import withLoading from "../HOC/withLoading";
import { getDefaultStockCounter } from "../services/stock.api";
import { useCounter } from "../hooks/useCounter";
import { mystore } from "../MyRedux/MyRedux";
import {
  myconnect,
  useMySelector,
  useMyDispatch,
} from "../MyReactRedux/MyReactRedux";
import { useForceUpdate } from "../hooks/useForceUpdate";
import { useStocks } from "../context/StocksContext";
// import { useStocks, useStocksUpdate } from "../context/StocksContext";
import { useSelector } from "react-redux";

class BuyStock extends React.Component {
  render() {
    return (
      <WithStockConsumer>
        {(counterState, dispatch) => (
          <section>
            <h1>BuyStock</h1>
            <div>How many Stonks would you like to buy?</div>
            <button
              type="button"
              onClick={() => {
                dispatch({type: 'COUNTER_ADD'})
              }}
              name="buy"
            >
              Buy +
            </button>
            {this.props.isLoading ? (
              this.props.renderLoadingComponent("spinner")
            ) : (
              <span>{counterState}</span>
            )}

            <button
              type="button"
              onClick={() => {
                dispatch({type: 'COUNTER_SUB'})
              }}
              name="sell"
            >
              Sell -
            </button>
          </section>
        )}
      </WithStockConsumer>
    );
  }
}

// export default BuyStock;

const mapStateToProps = (state) => {
  return {
    counterValue: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hanldeAdd: () => dispatch({ type: "COUNTER_ADD" }),
    hanldeSub: () => dispatch({ type: "COUNTER_SUB" }),
  };
};

const storeConnect = myconnect(mapStateToProps, mapDispatchToProps);

export default storeConnect(BuyStock);

// const WithStockConsumer = storeConnect(BuyStock)

const WithStockConsumer = (props) => {
  let counterState = useMySelector((state) => {
    return state.value;
  });
  // console.log(counterState);
  let dispatch = useMyDispatch();
  return props.children(counterState, dispatch);
};

// WithStockConsumer();

// HOC hell
//const BuyStockContainer = withCounter()(withLoading(BuyStock));

// const BuyStockContainer = withLoading((props) => (
//   <WithCounterCosumer defaultCounter={7}>
//     {(counter, handleIncrement, handleDecrement, handleSetCounter) => (
//       <BuyStock
//         {...props}
//         counter={counter}
//         handleIncrement={handleIncrement}
//         handleDecrement={handleDecrement}
//         handleSetCounter={handleSetCounter}
//       />
//     )}
//   </WithCounterCosumer>
// ));

// function

export const BuyStockFn = (props) => {
  let stocks = useStocks().stocks;
  let updateStocks = useStocks().updateStocks;
  // let updateStocks = useStocksUpdate();

  const removeStock = () => {
    updateStocks(stocks - 1);
  };

  const addStock = () => {
    updateStocks(stocks + 1);
  };

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
