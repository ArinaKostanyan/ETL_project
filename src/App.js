import './App.css';
import { Register } from './components/register';
import NavBar from './components/NavBar.js';
import { Login } from './components/login';
import Route from './components/route';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
      <Route path="/register">
        <Register />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      </div>

    </div>
  );
}

export default App;
