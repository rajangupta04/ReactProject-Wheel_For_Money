import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
      <Router>
          <div>
            <Switch>   
                <Route > <Signup /> </Route>  
                <Route exact path="/"> <Login /> </Route>
                <Route path="/home"> <Home/> </Route>
            </Switch>
          </div>  
      </Router>
  );
}

export default App;
 
