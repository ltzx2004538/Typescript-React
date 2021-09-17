import React from 'react'
import {FetchApi} from './FetchApi';

export const FetchAPIExample: React.FC = (props)=>{
	const {data,loading} = FetchApi('training/60ac779a4575745304200b32')
	
	return(
		<div>
			<span>Fetch API</span>
			<p>
				{loading?'loading':data.name}
			</p>
		</div>
	)
}