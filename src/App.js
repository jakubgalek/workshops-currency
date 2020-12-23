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
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact={true}>
            <Calculator />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact"component={Contact} />
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
