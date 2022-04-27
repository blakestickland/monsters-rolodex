import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(users => 
        this.setState(
          () => {
            return {monsters: users}
          },
        () => {
          console.log(this.state);
          }
      )  
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    function filterItems(arr, query) {
      return arr.filter((element) => {
        const queryString = query.toLowerCase();
        return element.name.toLowerCase().indexOf(queryString) !== -1;
      })
    }

    const filteredMonsters = filterItems(
      monsters,
      searchField
    );


    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className="monsters-search-box"
          placeholder="search-monsters"
          onChangeHandler={onSearchChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
