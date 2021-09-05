import { count } from 'console';
import React, {useRef, useState, useEffect}from 'react'
import { useForm} from './useForm';

interface ICounter {
	countNum1: number| null;
	countNum2: number | null
}

export const HoosExample:React.FC =()=> {
	const inputRef = useRef<HTMLInputElement | null>(null) // useRef
	const [username, setUsername] = useState<string | null>(""); //useState
	const [values, handleChange] = useForm({ email: "email"}); //useForm
	// const [email, setEmail] = useState<string>("");
	const [{countNum1,countNum2}, setCount] = useState<ICounter>({countNum1: 1, countNum2: 2}); //set Object 

	useEffect(() => {
		console.log("fire")
	},[values.email])

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
	}
	return (
		<div>
			 <input type="text" ref={inputRef}/>
			 <button onClick={handleUsername}>
				 change username
			 </button>
			 <p>
				 {username}
			</p>
			{/* <input name="email" value= {email} onChange={(e)=>{
				setEmail(e.target.value)
			}}/> */}
			{/* <p>
				{email}
			</p> */}
			<input name="email" value= {values.email} onChange={handleChange}/>
			<p>
				{values.email}
			</p>
			<div>
				<p> counter</p>
				<button onClick={handleCounter}>
					add number
				</button>	
				<p>
					count 1: {countNum1}
				</p>
				<p>
					count 2: {countNum2}
				</p>
			</div>
			
		</div>
	)
}