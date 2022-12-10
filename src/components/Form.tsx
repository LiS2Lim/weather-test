const Form = (props: any) => {
	return (
		<form>
			<input type='text' name='city' placeholder='도시명' onChange={e => props.setCity(e.target.value)}/>
			{ props.city }
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Form;
