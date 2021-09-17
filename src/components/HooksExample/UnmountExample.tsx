import React, {useEffect,useState} from 'react'

// interface Props {
// 	email: string | null
// }

export const UnmountExample: React.FC = (props)=>{
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		const onMouseMove = (event:MouseEvent):void => {
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
			unmountExample
			<button onClick={()=>{
				setShow(!show)
			}}>
				{`${show?'show':'hide'}`}
			</button>
		</div>

	)
}