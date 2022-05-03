import React, { useContext, useState } from "react";
import Counter, { CounterFn } from "./components/Counter";
import BuyStock, { BuyStockFn } from "./components/BuyStock";
import StockCalCulator, {
  StockCalCulatorFn
} from "./components/StockCalCulator";
import "./index.css";

const PageInfo = {
  Counter: Counter,
  BuyStock: BuyStock,
  StockCalCulator: StockCalCulator,
  CounterFn: CounterFn,
  BuyStockFn: BuyStockFn,
  StockCalCulatorFn: StockCalCulatorFn
};

class App extends React.Component {
  state = {
    currentPage: "Counter"
  };

  hanldeChangePage = (page) => {
    this.setState({
      currentPage: page
    });
  };

  getCurrentPage = () => {
    const CurrentPage = PageInfo[this.state.currentPage];
    return <CurrentPage name="patrcik" />;
  };

  render() {
    return (
      <section>
        <header>
          <nav>
            {Object.keys(PageInfo).map((page) => {
              return (
                <a
                  key={page}
                  href="##"
                  onClick={() => this.hanldeChangePage(page)}
                >
                  {page}
                </a>
              );
            })}
          </nav>
        </header>
        <main>{this.getCurrentPage()}</main>
      </section>
    );
  }
}

export default App;
