import React, {useState} from 'react';

interface Props {
	hovered: boolean
}
const HOCExample: React.FC<Props> = (props)=>{
	const style = {
		backgroundColor: props.hovered? "red":''
	}
	return(
		<div style={style}>
			<h1>
				Hello this is HOC component
			</h1>
		</div>
	)
}

const detectHover = (Component: any) =>{
	return (props: any) => {
		const [hovered, setHovered] = useState(false);
		return (
			<div 
				onMouseOver={()=>{setHovered(true);}}
				onMouseLeave={()=> {setHovered(false)}}
			>
				<Component hovered= {hovered} {...props}/>
			</div>
		)
	}
}

export default detectHover(HOCExample);