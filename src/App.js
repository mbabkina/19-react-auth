import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './Components/sign-form.sass'


function App() {
  return (
    <div className="app-wrapper">
     
        <Router>
        <nav className='navbar'>
          <NavLink to='/sign-up' className='navlink' activeClassName='active-link'>
            Sign Up
          </NavLink>
         
          <NavLink
            to='/sign-in'
            className='navlink'
            activeClassName='active-link'
          >
            Sign In
          </NavLink>
          </nav>

          <Switch>
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
            
            <Route path='/' component={SignIn} />
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
