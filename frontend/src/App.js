import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// Pages & components
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AllRepositories from './pages/AllRepositories';
import Create from './pages/Create';

function App() {
	const { user } = useAuthContext();

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
              element={user ? <Profile /> : <Navigate to="/signin" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to='/profile' />}
            />
            <Route
              path="/signin"
              element={!user ? <Signin/> : <Navigate to='/profile' />}
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
