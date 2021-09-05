import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Pages/Home/';
import {ContextExample} from './components/ContextExample';
import { HoosExample } from './components/HooksExample';

const App: React.FC = () => {

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/context/'>Context Example</Link>
						</li>
						<li>
							<Link to='/hooks/'>Hooks Example</Link>
						</li>
					</ul>
				</nav>

				<Route path='/' exact component={Home} />
				<Route path='/context' component={ContextExample} />
				<Route path='/hooks' component={HoosExample} />
			</div>
		</Router>
	);
}

export default App;


