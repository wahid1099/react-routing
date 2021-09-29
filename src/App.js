import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Friend from "./Component/Friends/Friend";
import Errror from "./Component/Error/Errror";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Component/Header/Header";
import Freidndetails from "./Component/Friends/Freidndetails";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route exact path='/friend'>
          <Friend></Friend>
        </Route>
        <Route path="/friend/:friendId">
          <Freidndetails></Freidndetails>
        </Route>
        <Route path="*">
          <Errror></Errror>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
