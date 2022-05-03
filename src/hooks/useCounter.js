import React from "react";
export const useCounter = (init) => {
  const [counter, setCounter] = React.useState(init);

  const handleIncrement = () => setCounter((preCounter) => preCounter + 1);
  const handleDecrement = () => setCounter((preCounter) => preCounter - 1);

  // return {
  //   counter: counter,
  //   handleIncrement: handleIncrement,
  //   handleDecrement: handleDecrement
  // };

  return [counter, handleDecrement, handleIncrement];
};
