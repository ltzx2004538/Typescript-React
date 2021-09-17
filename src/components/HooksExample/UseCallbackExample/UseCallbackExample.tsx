import React,{useState, useCallback} from 'react'
import {MemoExample} from './MemoExample';
interface Props {
	testLabel?: string
}

 const UseCallbackExample: React.FC<Props> = (props)=>{
	const {testLabel} = props;
	const [count,setCount] = useState<number>(0)

	const increment = useCallback((number) =>{
		setCount(prevCount => prevCount + number);
	},[setCount])
	 
	return (
		<div>
			<span>
				{count}
			</span>
			<MemoExample increment={increment}/>
			<span data-testid="testLabel">
				Hi {testLabel?testLabel:'no data'}
			</span>
		</div>
	)
}

export default UseCallbackExample;

