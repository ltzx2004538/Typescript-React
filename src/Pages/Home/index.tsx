import React, {
	useState
} from 'react';

type Greeting = (name: string) => string;
interface Person {
	name: string;
	hungry: boolean
}

const Home: React.FC = (props) =>{
	return (
		<div>
			Home Page
		</div>
	)
}

export default Home;
