import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import stocksReducer from "./stocks";


const rootReducer = combineReducers({
  stocks: stocksReducer
});

let enhancer;

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;