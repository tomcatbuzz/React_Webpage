import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import NavBar from '../components/HeaderComponent/NavBar';
import Footer from '../components/FooterComponent/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;