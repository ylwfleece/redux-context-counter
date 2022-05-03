import React from "react";
import { getDefaultStockCounter } from "../services/stock.api";

const withCounter = (defaultCounter = 0) => (WrappedCompoent) => {
  return class NewComponent extends React.Component {
    state = {
      counter: defaultCounter
    };

    handleIncrement = () => {
      this.setState((preState) => {
        return {
          ...preState,
          counter: preState.counter + 1
        };
      });
    };

    handleDecrement = () => {
      this.setState((preState) => {
        return {
          ...preState,
          counter: preState.counter - 1
        };
      });
    };
    hanldeSetCounter = (newCounter) => {
      this.setState({
        counter: newCounter
      });
    };

    render() {
      return (
        <WrappedCompoent
          {...this.props}
          counter={this.state.counter}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleSetCounter={this.hanldeSetCounter}
        />
      );
    }
  };
};

export default withCounter;

export class WithCounterCosumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.defaultCounter
    };
  }
  handleIncrement = () => {
    this.setState((preState) => {
      return {
        ...preState,
        counter: preState.counter + 1
      };
    });
  };

  handleDecrement = () => {
    this.setState((preState) => {
      return {
        ...preState,
        counter: preState.counter - 1
      };
    });
  };
  hanldeSetCounter = (newCounter) => {
    this.setState({
      counter: newCounter
    });
  };
  render() {
    return this.props.children(
      this.state.counter,
      this.handleIncrement,
      this.handleDecrement,
      this.hanldeSetCounter
    );
  }
}
