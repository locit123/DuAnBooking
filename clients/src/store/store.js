import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga/mySaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);
export default store;
