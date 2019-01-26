import React, { Component } from 'react';
export default class Book extends Component {

constructor(props){
	super(props);
	this.state={
	count:0 ,
	showInfo:true

    };
}

 handleInfo = () =>{
 	this.setState({
 		showInfo: !this.state.showInfo
 	})
 }

	render() {
		const {id,img,title,author} = this.props.info;
		const { deleteItem } = this.props;
	
			return (
				<div className="book">
				 <img src={img} width="150px" alt="book"/>
				  <div>
				  	<h4>Title: {title}</h4>
				  	<h6>By: {author}</h6>
				  	<button onClick={deleteItem}> delete item </button>
				  	<button onClick={this.handleInfo}>show info</button>
				  	{this.state.showInfo && <p>yeeerrrp</p>}
				  </div>
					
				 </div>
			);
	}
}

// export default Book;

