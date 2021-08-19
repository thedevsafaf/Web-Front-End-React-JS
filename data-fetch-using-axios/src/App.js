import logo from './logo.svg';
import './App.css';
// import PersonList from './PersonList';
import PersonListUsingPost from './PersonListUsingPost'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Players</p>
        {/* <PersonList/> */}
        <PersonListUsingPost/>
      </header>
    </div>
  );
}

export default App;
