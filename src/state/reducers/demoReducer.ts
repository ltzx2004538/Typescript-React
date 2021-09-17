import { Action } from "../../interfaces/action";
import { ACTION_TYPE } from "../../constants/action";

const initialState = 0;

const reducer= (state: number = initialState, action: Action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD:
			return state + action.payload;
		case ACTION_TYPE.MINUS:
			return state - action.payload;
		default:
			return state;
	}
}

export default reducer