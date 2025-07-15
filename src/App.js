import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from "./MovieDetails";
import Create from "./Create";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/ceate">
          <h1>Create new blog </h1>
            <create/>
          </Route>
         <Route path='/blogs/:id'>
         <MovieDetails/>
         </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;

