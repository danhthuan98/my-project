import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Test from './Components/Test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
