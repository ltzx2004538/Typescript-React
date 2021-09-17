
import { ACTION_TYPE } from "../constants/action";

export interface PayloadAction {
	payload: number;
}

export interface AddAction extends PayloadAction{
	type: ACTION_TYPE.ADD;
}

export interface MinusAction  extends PayloadAction{
	type: ACTION_TYPE.MINUS
}

export type Action = AddAction | MinusAction;