import './App.css';
import LoginForm from './components/loginFormComponent';
import Posts from './components/posts';
import SignIn from './components/sections/signin';
import SignUp from './components/sections/signup';
import { BrowserRouter, Route } from 'react-router-dom'
import Buttons from './components/sections/buttons';
import Home from './components/sections/home';

function App() {
  return (
    <div className="back">

      <BrowserRouter>
      <Route path='/'>
          <Buttons />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route><br /> 
      </BrowserRouter>

    </div>
  );
}

export default App;
