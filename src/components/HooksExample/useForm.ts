import {useState} from 'react'

interface IUser {
	[key:string]: string
}

export const useForm = (initialValues: any)=> {
	const [values, setValues] = useState<any>(initialValues);

	return [
		values,
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValues({
				...(values),
				[e.target.name]: e.target.value
			})
		}
	]
}