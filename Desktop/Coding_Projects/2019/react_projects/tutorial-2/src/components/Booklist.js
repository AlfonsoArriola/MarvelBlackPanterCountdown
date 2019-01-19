import React, { Component } from 'react';
import Book from './Book';
import booksData from './Data';

class Booklist extends Component {
	constructor(props){
		super(props);

		this.state = {
           books: booksData
		};
	}

handleClick = () =>{
	console.log(`i'm information from the parent container`);
}


	render() {
		
		return (
			<div>
				<h2> Best selling books </h2>
				{this.state.books.map(book => (
					<Book key={book.id} info={book} handleClick= {this.handleClick}/>
					))}	

			</div>
		);
	}
}

export default Booklist;

