import React from 'react';
import {BrowserRouter as Router,
Switch,
Link,
Route} from 'react-router-dom'

//import { Button } from './components/Button';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

//const day='Saturday';


function App() {
  // JSX
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to ="/workshops-currency/">Home</Link></li>
          <li><Link to ="/workshops-currency/about">About</Link></li>
          <li><Link to ="/workshops-currency/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route path="/workshops-currency/" exact={true}>
            <Calculator />
          </Route>
          <Route path="/workshops-currency/about">
            <About />
          </Route>
          <Route path="/workshops-currency/contact"component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

//  <App>
//    <Header>
//      <Menu></Menu>
//    </Header>
//    <Main>
//        <div></div>
//        <div></div>
//        <div></div>
//    </Main>
//    <Footer></Footer>
//  </App>

export default App;
