import React from 'react';
import Navbar from './components/Navbar'
import AddActor from './components/Actor'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
return (
  <Provider store={store}>
    <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/AddActor" component={AddActor}/>
            {/* <Route exact path="/AddMovie" component={AddMovie}/>
            <Route exact path="/" component={Loader}/> */}
          </Switch>
    </Router>
  </Provider>
)};
export default App;
