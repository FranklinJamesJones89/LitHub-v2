import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
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
          </Routes>
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
