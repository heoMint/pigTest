import './App.css';
import Main from './pages/Main';
import Selected from './pages/Selected';
import Results from './pages/Results';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/question'
          element={<Selected />}
        />
        <Route
          path='/result'
          element={<Results />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
