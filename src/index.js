import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
	return (
	
	<div>
		<p>Hello {props.name}</p>
	</div>
	)

}



const App = () =>{
	
	const now = new Date()
	const a = 10
	const b = 20
	
	
return (
	<div>
		<p>Hello World, it is {now.toString()}</p>
		<p>{a} + {b} = {a+b}</p>
		
		<h1>Greeting</h1>
		<Hello name = "marius" />
		<Hello name = "prodan" />
		
		
		</div>
)
}






ReactDOM.render(<App />, document.getElementById('root'));
