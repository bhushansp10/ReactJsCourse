import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import me from './me.jpg';
import grocery from './grocery.jpg';
import TodoItem from './TodoItems.js';

const topics = ['HTML', 'Node', 'React'];


const groceries = ['Strawberries', 'Banana', 'Bread'];








class App extends Component {
  

handleClick(){


alert('Hello I am Clicked!');

}




  render() {


    return (





      
      
<div className="App">


<button onClick={this.handleClick.bind(this)}>
Click Me!
</button>


  
    
    <Biography/>
    <GroceryList/>
    <TodoItem/>
    <Clock/>
   

   </div>
  );
    }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className="App-clock">
        The time is {this.state.time}.
      </p>
    );
  }
}



class Biography extends React.Component {

render() {
    return (
      
   <div>
    <p style={{backgroundColor: '#ebebe0', color: 'black'}}>MY BOY</p> 
    <img src={me} style= {{width: 250, height: 250, backgroundColor: 'black'}}/>

    <p style={{backgroundColor: '#ebebe0', color: 'black', fontFamily: 'bold'}}>
    Name: Tejas
   
   
    </p> 

    <p style={{backgroundColor: '#ebebe0', color: 'black'}}>Hobbies: playing</p> 
  <hr/>
   </div>


  );
    }
}


class GroceryList extends React.Component {



render() {
    return (
      
   <div>



    
    <img src={grocery} style= {{width: 200, height: 200}}/>




    <ul>


{groceries.map(grocery =><li style={{backgroundColor: '#003399', color: 'white'}}>{grocery}</li>)}

</ul>


<hr/>
    
<ul>
   



{topics.map(topic =><li>{topic}</li>)}

</ul>

<hr/>

<p>Copyright @ Bhushan</p>

   </div>
  );
    }
}









export default App;
