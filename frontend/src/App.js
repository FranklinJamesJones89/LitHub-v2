import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
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
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
