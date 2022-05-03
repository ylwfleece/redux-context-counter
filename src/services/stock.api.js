export const getDefaultStockCounter = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      const response = {
        defaultStockCounter: 10
      };
      res(response);
    }, 2000);
  });
