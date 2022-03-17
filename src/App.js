import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <h1>ROBOFRIENDS</h1>
      <SearchBox/>
      <CardList/>
    </div>
  );
}

export default App;
