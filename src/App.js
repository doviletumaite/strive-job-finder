import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home';

function App() {
  return (
   <Router>
     <Route path="/" exact component={Home}/>
     <Route exact path="/companyName" />
   </Router>
  );
}

export default App;
