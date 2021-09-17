import React from 'react';
import ReactDOM from 'react-dom';
import UseCallbackExample from '../UseCallbackExample';
import {render, cleanup} from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom'

afterEach(cleanup);

it("render without crashing",()=>{
	const div = document.createElement("div");
	ReactDOM.render(<UseCallbackExample></UseCallbackExample>,div)
})

// it("renders component correctly",()=> {
// 	const {getByTestId} = render(<UseCallbackExample testLabel={'test1'}></UseCallbackExample>);
// 	expect(getByTestId('testLabel').textContent).toBe('test1');
// })

// it("renders component correctly",()=> {
// 	const {getByTestId} = render(<UseCallbackExample testLabel={'test2'}></UseCallbackExample>);
// 	expect(getByTestId('testLabel').textContent).toBe('test2');
// })

it("matches snapshot 1", ()=>{
	const tree = TestRenderer.create(<UseCallbackExample testLabel={'test1'}></UseCallbackExample>).toJSON();
	expect(tree).toMatchSnapshot();
})

it("matches snapshot 2", ()=>{
	const tree = TestRenderer.create(<UseCallbackExample testLabel={'test2'}></UseCallbackExample>).toJSON();
	expect(tree).toMatchSnapshot();
})