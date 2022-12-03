import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
