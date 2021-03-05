import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import TechSummary from './components/TechSummary';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/tech-summary' component={TechSummary} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
