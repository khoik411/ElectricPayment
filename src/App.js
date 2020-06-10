import React from "react";
import "./App.css";
import Nav from "./nav";
import Info from "./info";
import Family from "./listFamily";
import FamilyDetail from "./familydetail";
import Home from "./home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          
        <Route path ="/" exact component={Home}/>
        <Route path ="/family" exact  component={Family}/>
        <Route path ="/Info" component={Info}/>
        <Route path ="/family/:id" component={FamilyDetail}/>
        </Switch> 
      </div>
    </Router>
  );
}
// const Home =()=>( 
//   <div>
//     {Home}
//   </div>
// );

export default App;
