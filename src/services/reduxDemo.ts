import { ACTION_TYPE } from "../constants/action";
import { Action } from "../interfaces/action";
import { Dispatch } from "redux";

export const Add = (amount: number) => {
	return(dispatch: Dispatch <Action>) =>{
		dispatch({
			type: ACTION_TYPE.ADD,
			payload: amount
		})
	}
}

export const Minus = (amount: number) => {
	return(dispatch: Dispatch <Action>) =>{
		dispatch({
			type: ACTION_TYPE.MINUS,
			payload: amount
		})
	}
}