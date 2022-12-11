import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

type typeResult = {
	name:string
	country:string
}

function App() {
	const [city, setCity] = useState<string>("");
	const [result, setResult] = useState<typeResult>({
		name:"",
		country:""
	});
	const getWeater = (e:any) => {
		e.preventDefault();
		fetch(`http://node.li-lim.net/weather/${ city }`)
		.then(res => res.json())
		.then(data => setResult({
			name: data.location.name,
			country: data.location.country
		}))
	}
	
	return (
		<div className="App">
			<Title />
			<Form setCity={ setCity } getWeater={ getWeater }/>
			<Result result={ result }/>
		</div>
	);
}

export default App;
