import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/shared/404';
import Header from './components/shared/Header';
import CoursesPage from './components/courses/Courses';
function App() {
  return (
    <div className="container-fluid">
    <Router>
     <Header /> 
     <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/about'><About /> </Route>
        <Route path='/courses'><CoursesPage /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
