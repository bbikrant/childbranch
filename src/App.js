import logo from './logo.svg';
import './App.css';
import Home from './Home'
// import Test from './Test';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
   import { Route } from 'react-router-dom';
   import Main from './Main';
  //  import Login from './Login';
import Loginform from './Loginform';
  //  import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Loginform />}></Route>
          
          
          </Route>
          </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
