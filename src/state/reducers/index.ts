import { combineReducers } from "redux";
import demoReducer from './demoReducer';

const reducers = combineReducers ({
	demo: demoReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>