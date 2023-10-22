import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home'; // Import the component for your root page

function App(): JSX.Element {


  return (
    <Router>
      <div className="App flex bg-neutral-700 text-white">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
