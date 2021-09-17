import { count } from 'console';
import React, {useRef, useState, useEffect}from 'react'
import { useForm} from './useForm';
import { UnmountExample } from './UnmountExample';
import {FetchAPIExample} from '../FetchAPIExample';
import UseCallbackExample from './UseCallbackExample';
import styled, {css} from 'styled-components';

interface ICounter {
	countNum1: number| null;
	countNum2: number | null
}

const Section = styled.div`
		margin-bottom: 20px;
	`
	const Button = styled.button`
		outline: none;
		background-color: transparent;
		margin: 0 10px;
	`

const TitleLabel = styled.span`
		font-size: 20px;
	`

export const HoosExample:React.FC =()=> {
	const inputRef = useRef<HTMLInputElement | null>(null) // useRef
	const [username, setUsername] = useState<string | null>(""); //useState
	const [values, handleChange] = useForm({ email: "email"}); //useForm
	const [showUnmount, setShowUnmount] = useState<boolean>(false);
	const [{countNum1,countNum2}, setCount] = useState<ICounter>({countNum1: 1, countNum2: 2}); //set Object 
	const [showFetch, setShowFetch] = useState<boolean | null>(false);

	const handleUsername = () => {
		const newName = inputRef.current?.value;
		setUsername(newName?newName:'');
	}

	const handleCounter = () => {
		setCount( prevState => ({
			...prevState,
			countNum1: prevState?.countNum1? prevState.countNum1 + 1: prevState.countNum1,
			countNum2: prevState?.countNum2? prevState.countNum2 + 2: prevState.countNum2
		}))
	};

	return (
		<div>
			<Section>
				<input type="text" ref={inputRef}/>
				<Button onClick={handleUsername}>
					change username
				</Button>
				<Button onClick={()=>{
					inputRef.current?.focus();
				}}>
					focus
				</Button>
				<p>
					{username}
				</p>
			</Section>
			<Section>
				<input name="email" value= {values.email} onChange={handleChange}/>
				<p>
					{values.email}
				</p>
			</Section>
			<Section>
				<p> counter</p>
				<button onClick={handleCounter}>
					add number
				</button>	
				<div>
					<p>
						count 1: {countNum1}
					</p>
					<p>
						count 2: {countNum2}
					</p>
				</div>
			</Section>
			<Section>
				{showFetch && 
					<FetchAPIExample>
					</FetchAPIExample>
				}
					<button onClick={()=>{
						setShowFetch(!showFetch)
				}}>
					{showFetch?'hide fetch':'show fetch'}
				</button>
			</Section>
			<Section>
				<TitleLabel>
					Call Back Example
				</TitleLabel>
				<UseCallbackExample>
					
				</UseCallbackExample>

			</Section>
			
			{showUnmount && 
				<UnmountExample>
				</UnmountExample>
			}
				<button onClick={()=>{
				setShowUnmount(!showUnmount)
			}}>
				showUnmount
			</button>
		</div>
	)
}