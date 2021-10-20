import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home';
import singleJobPage from './Components/singleJobPage';

function App() {
  return (
   <Router>
     <Route path="/" exact component={Home}/>
     <Route exact path="/companyName" exact component={singleJobPage} />
   </Router>
  );
}

export default App;
