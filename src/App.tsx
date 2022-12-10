import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

function App() {
	type FormPropsType = {
		city: string;
		setCity: React.Dispatch<React.SetStateAction<string>>;
	};
	
	const [city, setCity] = useState<string>("");
	
	return (
		<div className="App">
			<Title />
			<Form city={ city } setCity={ setCity }/>
			<Result city={ city } setCity={ setCity }/>
		</div>
	);
}

export default App;
