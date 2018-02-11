import React, { Component } from 'react';

export default class TodoComponent extends Component 
{

constructor(){

super();
this.state = {

todoItems: []

}

}

handleClick(){


const todoItems = this.state.todoItems;
todoItems.push(this.textbox.value);


this.setState({

todoItems: todoItems


	});

}



 removeItem (zzz) {
const todoItems = this.state.todoItems;
var index = todoItems.indexOf(zzz.item);

if(index!== -1)
todoItems.splice(index, 1);

console.log("index is" +index);
this.setState({todoItems: todoItems});

 
  }






render(){
return(

<div className="App">

<input
type="text"
ref={textbox => this.textbox = textbox}
/>

<button onClick={this.handleClick.bind(this)}>
Add Item 

</button>





<ul>

{this.state.todoItems.map(item => <li>{item}<button onClick={this.removeItem.bind(this,{item})}>
Remove Item</button></li>)}

</ul>
</div>

	);



}










}





















