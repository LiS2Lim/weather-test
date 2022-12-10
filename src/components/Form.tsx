type FormPropsType = {
	setCity: React.Dispatch<React.SetStateAction<string>>;
	getWeater: (e:any) => void;
}

const Form = (props:FormPropsType) => {
	return (
		<form onSubmit={ props.getWeater }>
			<input type='text' name='city' placeholder='도시명' onChange={e => props.setCity(e.target.value)}/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Form;
