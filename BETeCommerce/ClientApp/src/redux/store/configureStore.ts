import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history";
import { reducers } from "../reducers";

export default function configureStore(history: History, initialState: any) {
  const middleware = [thunk, routerMiddleware(history)];

  //@ts-ignore
  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  const enhancers = [];
  const windowIfDefined =
    typeof window === "undefined" ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const composedMiddleware = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
  return createStore(rootReducer, initialState, composedMiddleware);
}
