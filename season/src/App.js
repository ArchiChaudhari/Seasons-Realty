import "./App.css"; 
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom"; 
import Home from "./components/home"; 
import About from "./components/aboutComp/aboutHome"; 
import ContactUs from "./components/contactComp/contactHome"; 
import test from "./components/testComp/testHome";
import login from "./components/login";

function App() { 

  return ( 

    <> 
      <Router> 

        <Switch> 
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/contactus" component={ContactUs} /> 
          <Route exact path="/test" component={test} /> 
          <Route exact path="/login" component={login} /> 
         

          <Redirect to="/" /> 

        </Switch> 

      </Router> 

    </> 

  ); 
} 

  

export default App;