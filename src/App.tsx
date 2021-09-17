import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Pages/Home/';
import {ContextExample} from './components/ContextExample';
import { HoosExample } from './components/HooksExample';
import { ReduxExample } from './components/ReduxExample';
import HOCExample from './components/HOCExample';
import RenderProps from './components/RenderProps';

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
						<li>
							<Link to='/redux/'>Redux Example</Link>
						</li>
						<li>
							<Link to='/HOC/'>HOC Example</Link>
						</li>
						<li>
							<Link to='/RenderPRops/'>RenderPros Example</Link>
						</li>
					</ul>
				</nav>

				<Route path='/' exact component={Home} />
				<Route path='/context' component={ContextExample} />
				<Route path='/hooks' component={HoosExample} />
				<Route path='/redux' component={ReduxExample} />
				<Route path='/HOC' component={HOCExample}/>
				<Route path='/RenderProps' component={RenderProps}/>
			</div>
		</Router>
	);
}

export default App;


