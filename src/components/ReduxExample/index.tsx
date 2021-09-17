import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../services";
import { RootState } from "../../state/reducers";


export const ReduxExample: React.FC = ()=>{
	const dispatch = useDispatch();
	const state = useSelector((state: RootState) => state.demo)
	const {	Add, Minus} = bindActionCreators (actionCreators,dispatch);
	return (
		<div>
			<span> {state} </span>
			<button onClick={() => Add(1000)}> Add </button>
			<button onClick={()=> Minus(1000)}> Minus </button>
		</div>
	)

}