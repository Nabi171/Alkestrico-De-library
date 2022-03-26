import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Book from './Book/Book';
import NavVar from './NavVar/NavVar';




function App() {
  return (
    <div className="App">
      <NavVar></NavVar>
      <Book></Book>
    </div>
  );
}

export default App;
