import React from 'react';
import './App.css';
import {name,age} from './components/Data'
import Booklist from './components/Booklist'



class App extends React.Component{
	render(){
		return(

			<div>
		       
		       <Booklist></Booklist>
		       
		     </div>
		)
	}
}

export default App;
