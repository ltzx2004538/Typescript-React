import React from 'react';

interface MemoProps {
	increment: (number:number) => void;
}

export const MemoExample= React.memo<MemoProps>(
	(props) => {
		const {increment} = props
		console.log('render')
		return (
			<button onClick= {e=> increment(5)}>
				Memo
			</button>
		 );
	}
	);