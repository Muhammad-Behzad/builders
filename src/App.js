import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <>
    
<BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/project' element={< Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
