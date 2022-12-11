type typeResult = {
	result: {
		name:string
		country:string
	}
}

const Result = (props:typeResult) => {
	return (
		<div>
			<h2>Result</h2>
			{ props.result.name }
			{ props.result.country }
		</div>
	);
};

export default Result;
