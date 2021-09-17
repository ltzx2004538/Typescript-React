import {useEffect, useState, useRef} from 'react'

const baseUrl = 'http://localhost:3000/api/'
export const FetchApi = (url:string) =>{
	const [state, setState] = useState<any>({data: null, loading: true})
	const isCurrent = useRef(true);
	useEffect(()=>{
		return () => {
			isCurrent.current = false;
		}
	})
	useEffect( ()=>{
		setState({data: null, loading: true})
		fetch(`${baseUrl}${url}`)
		.then(res => {
			if(res.ok){
				return res.json();
			}
			else {
				throw Error(res.statusText);
			}
		})
		.then(res =>{
			setTimeout(()=>{
				if(isCurrent) {
					setState({data: res.enrollment, loading: false})
				}
				
			},2000);
		})
		.catch( err =>{
			console.log(err);
		})
	},[url]);
	return state;
};