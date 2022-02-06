import logo from './logo.svg';
import './App.css';

function App() { // React Functional Component

  const name = "Sai";

  return (
    <div>
      <div>Hello JSX</div>
      <div>Author : { name === 'Sai' ? "MERN TA" : name }</div>
      <button onClick = { () => { alert("hello!") } }> Click Me </button>
    </div>
  );
}

export default App;
