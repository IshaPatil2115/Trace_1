import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Home/Home.js';
import Login from './Login.js'
import AboutUs from './AboutUs.js';
import OnBoarding from './OnBoarding.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/OnBoarding' element={<OnBoarding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
