import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import TechSummary from './components/TechSummary';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';
import styled from 'styled-components';

const Container = styled.body`
  text-align: center;
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 458px) {
    height: 90vh;
  }
`;

function App() {
  return (
    <Router>
      <Nav />
      <Container>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/tech-summary' component={TechSummary} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
