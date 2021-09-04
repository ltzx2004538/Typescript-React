import React, { useState } from 'react'

interface Props {
	children: (
		data: {
			count: number, 
			setCount: React.Dispatch<React.SetStateAction<number>>
		})
	 => JSX.Element | null;
}
const RenderPropsExample: React.FC<Props> = (props) => {
	const {children} = props;
	const [count, setCount] = useState(0)
	return(
		<div>
			{children({count, setCount})}
		</div>
	)
}

export default RenderPropsExample;