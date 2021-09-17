import React, {useState} from 'react';
import { render } from 'react-dom';

interface Props {
	hovered: boolean
}

const RenderProps = (props: Props)=> {
	const render = (hovered: boolean) => {
		const style = {
			backgroundColor: hovered? "red":''
		}
		return(
			<div style={style}>
				<h1>
					Hello this is Render Props component
				</h1>
			</div>
		)
	}
	return <DetectHover render={render}/>
}

const DetectHover = (props: any) => {
	const [hovered, setHovered] = useState(false);
	return (
		<div 
			onMouseOver={()=>{setHovered(true);}}
			onMouseLeave={()=> {setHovered(false)}}
		>
			{props.render(hovered)}
		</div>
	)
}

export default RenderProps;