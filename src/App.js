import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home';
// import Details from './Components/Details';
import DetailsRedux from './Components/DetailsRedux';


function App() {
  return (

   <Router>
     <Route path="/" exact component={Home}/>
     {/* <Route exact path="/details/:jobID" render={(routerProps) => <Details {...routerProps} title="job details" />} /> */}
     <Route exact path="/details/:jobID" render={(routerProps) => <DetailsRedux {...routerProps} title="job details" />} />
   </Router>

  );
}

export default App;
