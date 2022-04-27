import { useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);

  console.log("render");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(users =>
      setMonsters(() => {
        return {users};
      })
  );

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filterItems = (arr, query) => {
    return arr.filter((element) => {
      const queryString = query.toLowerCase();
      return element.name.toLowerCase().indexOf(queryString) !== -1;
    });
  };

  const filteredMonsters = filterItems(monsters, searchField);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search-monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}  

// constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

  

//   render() {
//     console.log("render");

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// }

export default App;
