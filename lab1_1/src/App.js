import './App.css';
import Button from './components/Button/Button';
import ButtonWithJSXStyle from './components/ButtonWithJSXStyle/ButtonWithJSXStyle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
        <ButtonWithJSXStyle/>
      </header>
    </div>
  );
}

export default App;
