import React, {useState, useRef}from "react";

interface Props {
	text: string;
	ok?: boolean;
	num?: number;
	fn?: (bob: string)=> void;
	person: Person;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Person {
	name: string;
	age: number;
}

export const TextField: React.FC<Props> = (props) => {
	const {
		text,
		person,
		handleChange,
	} = props;
	const [count, setCount] = useState<number | null>(5);
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	return(
		<div ref={divRef}>
			<input ref={inputRef} onChange= {handleChange} />
		</div>
	)
}