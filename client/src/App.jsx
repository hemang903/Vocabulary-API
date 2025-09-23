import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import AddVocab from './components/AddVocab';
import Allvocab from './components/Allvocab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}

          <div className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col p-4 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:flex`}>
            <button
              className="self-end md:hidden mb-4"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <Link to="/" className="p-3 hover:bg-gray-700 flex gap-5 items-center "><i className="fa-solid fa-house"></i> Home</Link>
            <Link to="/add/vocab" className="p-3 hover:bg-gray-700 flex gap-5 items-center "><i className="fa-regular fa-plus"></i> Add Vocab</Link>
            <Link to="/viewAll" className="p-3 hover:bg-gray-700 flex gap-5 items-center "><i className="fa-solid fa-list-ul"></i> All Vocab</Link>
          </div>
        

        {/* Right Side */}
        <div className="flex-1 p-6 bg-gray-800 overflow-y-auto" >
          {/* Top bar for mobile */}
          <button
            className="md:hidden mb-4"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl text-white " />
          </button>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add/vocab" element={<AddVocab/>} />
            <Route path="/viewAll" element={<Allvocab/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App
