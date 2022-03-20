import { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './data/robots';
import './SEGA.woff';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends Component {

  constructor(){
    super() //obligatoire pour appeler le constructeur de Component
    this.state={
      searchfield: '',
      robots: [],
    }

    // This binding is necessary to make `this` work in the callback
    //dans le cas où on aurait défini la fonction traditionnellement
    //this.onSearchChange = this.handleClick.bind(this);
  }

  //utiliser la syntaxe variable = fonction auto appelée 
  //pour que this désigne l'objet App et non le porteur de l'event (l'input)
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value.toLowerCase()})
  }

  render(){
    const {searchfield, robots} = this.state
    let filteredRobots = robots.filter((robot) => {return robot.name.toLowerCase().includes(searchfield) })
    let cardList = !robots.length ? <h1 className='mt5'>LOADING ...</h1> : <CardList robots={filteredRobots}/>
    return (
      <div className="App">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            {cardList}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }

  componentDidMount(){
    //une fois que le composant est monté, on va y injecter les données externes et cela va provoquer son update
    // pourquoi on ne les met pas en état initial ?
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
    .catch(error => console.log(error))

  }
  
}

export default App;
