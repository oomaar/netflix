import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './lib/firebase';
import { HomeScreen, LoginScreen } from './Screens';

function App() {
  const user = useSelector(selectUser);
  // const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
            <Switch>
              <Route exact path="/" component={HomeScreen} />
            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
