import React,{Fragment,useEffect} from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// Redux
// import { Provider } from "react-redux";
import store from "./store";


const App = () => {
return (
  // <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
          <Switch>
            {/* <Route exact path="/regisration" component={registration}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/" component={Loader}/> */}
          </Switch>
      </Fragment>
    </Router>
  // </Provider>
)};
export default App;
