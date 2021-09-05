import React, {useRef}from 'react'

export const RefExample:React.FC =()=> {
	const inputRef = useRef(null)
	return (
		<div>
			 <input type="text" ref={inputRef}/>	
		</div>
	)
}
