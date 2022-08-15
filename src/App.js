import './App.css';
import { Fragment } from 'react';
import HeaderSection from "./components/headerSection";
import MainMenu from './components/MainMenu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalculatorPage from './components/CalculatorPage';

function App() {
  return (
    <Router>
      <Fragment>
        <HeaderSection/>
        <Switch>
          <Route exact path='/'>
            <MainMenu/> 
          </Route>

          <Route path='/calculator'>
            <CalculatorPage/>
          </Route>

        </Switch>

      </Fragment>
    </Router>
  );
}

export default App;
