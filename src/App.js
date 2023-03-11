import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact';

function App() {
  return (
		<Router>
			<div>
			<Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projectGallery/" element={<ProjectGallery />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
		  </div>
    </Router>
  );
}

export default App;
