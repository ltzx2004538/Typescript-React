import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Pages/Home/';
import {ContextExample} from './components/ContextExample';
import styles from './App.less';

const App: React.FC = () => {

	return (
		<Router>
			<div>
				<nav>
					<ul className= {styles['homepage-navigation']}>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/context/'>Context Example</Link>
						</li>
						{/* <li>
							<Link to='/hooks/'>Hooks Example</Link>
						</li> */}
					</ul>
				</nav>

				<Route path='/' exact component={Home} />
				<Route path='/context' component={ContextExample} />
			</div>
		</Router>
	);
}

export default App;


