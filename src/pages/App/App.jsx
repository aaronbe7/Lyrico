import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import HomePage from '../HomePage/HomePage';
import LibraryPage from '../LibraryPage/LibraryPage';
import SearchPage from '../SearchPage/SearchPage';


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }


  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
            <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
            <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <>
                <Route exact path="/">
                    <HomePage user={user} handleLogout={handleLogout}/>
                </Route>
                <Route path="/user/:username">
                    <LibraryPage user={user} handleLogout={handleLogout}/>
                </Route>
                <Route exact path="/search">
                    <SearchPage user={user} handleLogout={handleLogout}/>
                </Route>
            </>
            :
            <Redirect to='/login'/>
          }
      </Switch>
    </div>
  );
}

export default App;