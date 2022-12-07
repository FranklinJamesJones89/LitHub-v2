import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import AllRepositories from './pages/AllRepositories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route/>
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/repositories"
              element={<AllRepositories />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
