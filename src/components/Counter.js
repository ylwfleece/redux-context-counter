import React from "react";
import withCounter, { WithCounterCosumer } from "../HOC/withCounter";
import { useCounter } from "../hooks/useCounter";

class Counter extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <section>
        <header> Counter:{this.props.counter} </header>
        <button onClick={this.props.handleIncrement}>+</button>
        <button onClick={this.props.handleDecrement}>-</button>
      </section>
    );
  }
}

//const CounterContainer = withCounter(5)(Counter);

const CounterContainer = () => (
  <WithCounterCosumer defaultCounter={7}>
    {(counter, handleIncrement, handleDecrement, handleSetCounter) => (
      <Counter
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleSetCounter={handleSetCounter}
      />
    )}
  </WithCounterCosumer>
);

export default CounterContainer;

export const CounterFn = (props) => {
  const { counter, handleIncrement, handleDecrement } = useCounter();

  return (
    <section>
      <header> Counter:{counter} </header>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </section>
  );
};
