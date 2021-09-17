import React, {useEffect}from 'react'

export const MouseMove = (props)=> {
	useEffect(() => {
		const onMouseMove = (event) => {
			console.log(event) 
		}
		window.addEventListener('mousemove', onMouseMove);
		console.log('open')
		return () => {
			console.log('remove')
			window.removeEventListener('mousemove', onMouseMove)
		}
	},[]);
	return (
		<div>
			Mousemove
		</div>
	)
}


