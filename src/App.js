import { Component } from 'react';
import './App.css';

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

  render() {
    console.log("render");

    function filterItems(arr, query) {
      return arr.filter((element) => {
        const queryString = query.toLowerCase();
        return element.name.toLowerCase().indexOf(queryString) !== -1;
      })
    }

    const filteredMonsters = filterItems(
      this.state.monsters,
      this.state.searchField
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
