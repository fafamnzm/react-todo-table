/* import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
 */
import React, { Component } from 'react';
import { BrowserRouter as BRouter, Route } from 'react-router-dom'
//import uuid from 'uuid';
import axios from 'axios'
//============================================================
import ThingsToDo from './components/ThingsToDo';
import Head from './components/Head';
import AddThings from './components/AddThings';
import AboutUs from './components/pages/AboutUs'
//============================================================
import './App.css';


export class App extends Component {

  state = {
    'things':[/* 
      {
        'id': uuid.v4(),
        'title': 'Code',
        'check': false,
      },
      {
        'id': uuid.v4(),
        'title': 'Learn new things',
        'check': false,
      },
      {
        'id': uuid.v4(),
        'title': 'Enjoy beauties of life',
        'check': true,
      },
      {
        'id': uuid.v4(),
        'title': 'Eat healthfood',
        'check': false,
      }, */
    ]
  }



  componentDidMount () {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
    
    axios.get(url)
    .then(response => this.setState({ things: response.data }))
    .catch(error => console.error('Error : ' +error))
  }

  //change check complete
  checkChanger = (id) => {
    this.setState({things: this.state.things.map(thing => {
      if (thing.id === id){
        axios.put('https://jsonplaceholder.typicode.com/todos/d'+  id)
        .then( thing.completed = !thing.completed)
        .catch(error => console.error('Error : ' +error))
      }
      return thing
    })});
  }

  //Delete Things
  delThing = (id) => {
    //const url ='https://jsonplaceholder.typicode.com/todos/' + id;
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({things: [...this.state.things.filter(thing => thing.id !== id)]}))    
    .catch(error => console.error('Error : ' + error))
  }

  //Add Stuff
  addThing = (thing) => {
    /* const newThing = {
      //'id': uuid.v4(),
      'title': thing,
      'check': false,
    } */
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const option = {
      'title': thing,
      'completed': false
    }
    if (thing !== ''){
      axios.post(url, option)
      .then(
        res => this.setState({ 'things': [...this.state.things, res.data] })
      //of coourse the ID is 201 (the same) so after added
      // when deleted, all with the same id will be deleted
      // however works perfectly fine with an actual database 
        )
      .catch(error => console.error('Error : ' + error))
    }    
  }

  render() {
    return (
      <BRouter>
        <div className="centerer">
          <div className="App">
            <Head />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <ThingsToDo things={this.state.things}
                checkChanger={this.checkChanger} 
                delThing={this.delThing}/>
                <AddThings addThing={this.addThing}/> 
              </React.Fragment>
            )} />
            <Route path="/about" component={AboutUs} />
          </div>
        </div>
      </BRouter>
      
    
    )
  }
}

export default App
