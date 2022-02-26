import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));
