import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import User from './pages/User'
import Upload from './pages/Upload'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/upload" element={<Upload />} />
      </Routes>

    </div>
  );
}

export default App;