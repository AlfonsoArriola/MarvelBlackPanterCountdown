import React, { Component } from 'react';
import Book from './Book';

class Booklist extends Component {

 state = {
 	books :[
	 {
	 	id:1,
	 	book: "The First Book",
	 	author: "Greg Pal"
	 },
	  {
	  	id:2,
	 	book: "The Second Book",
	 	author: "Kul ol"
	 },
	 {
	 	id:3,
	 	book: "The Third Book",
	 	author: "Ola igu"
	 },
	 {
	 	id:4,
	 	book: "The Fourth Book",
	 	author: "Sam Yo"
	 }
	]
 };

	

	render() {
		// const example = this.state.books.map(item => <p>{item.book}</p>);
		// console.log(example);
		return (
			<div>
				<h> From the book list!</h>
				{this.state.books.map(item => (
					<Book key={item.id} info={item} />
					))}
				
			</div>
		);
	}
}

export default Booklist;

