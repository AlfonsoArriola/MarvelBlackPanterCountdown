import React, { Component } from 'react';
import Button from './Button';

export default class Book extends Component {

constructor(props){
	super(props);
	this.state={
	count:0 

    };
}


addCount = () =>{
 this.setState({
  count: this.state.count + 1,

 })
};



	render() {
		const {img,title,author} = this.props.info;
		const {handleClick} = this.props;
		
			return (
				<div className="book">
				 <img src={img} width="150px" alt="book"/>
				  <div>
				  	<h4>Title: {title}</h4>
				  	<h6>By: {author}</h6>
				  	<button onClick ={this.addCount}> Add Count</button>
				  	
				  	<h1> count: {this.state.count}</h1>

				  	<Button handleClick={handleClick}></Button>
				  </div>
					
				</div>
			);
	}
}

// export default Book;

