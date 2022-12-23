import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AllRepositories from './pages/AllRepositories';
import Create from './pages/Create';

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
              path="/signin"
              element={<Signin />}
            />
            <Route
              path="/repositories"
              element={<AllRepositories />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
