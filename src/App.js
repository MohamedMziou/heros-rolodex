import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      heros: [],
      searchField: '',
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asc2'
        },
        {
          name: 'Zambala',
          id: 'asc3'
        }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ heros: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { heros, searchField } = this.state;
    const filtreHeros = heros.filter(hero =>
      hero.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Heros Rolodex</h1>
        < SearchBox
          placeholder='search heros'
          handleChange={this.handleChange}
        />
        <CardList heros={filtreHeros} />
      </div>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
