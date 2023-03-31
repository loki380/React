import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Name from './components/Name';
import Date from './components/Date';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
       <HelloWorld name="Hello 1"></HelloWorld>
       <HelloWorld name="Hello 2"></HelloWorld>
       <HelloWorld name="Kamil Olszewski"></HelloWorld>
       <Date/>
      <header className="App-header">
        <Counter/>
      </header>
    </div>
  );
}

export default App;
