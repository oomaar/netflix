import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { auth } from './lib/firebase';
import { HomeScreen, LoginScreen } from './Screens';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
      } else {
        // Logged out
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
