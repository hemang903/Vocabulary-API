import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import AddVocab from './components/AddVocab';
import Allvocab from './components/Allvocab';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}

          <div className="w-64 bg-gray-900 text-white flex flex-col p-4 fixed top-0 left-0 h-screen">
            <Link to="/" className="p-3 hover:bg-gray-700">🏠 Home</Link>
            <Link to="/add/vocab" className="p-3 hover:bg-gray-700">📺 Add Vocab</Link>
            <Link to="/viewAll" className="p-3 hover:bg-gray-700">📚 Show All Vocab</Link>
          </div>
        

        {/* Right Side */}
        <div className="ml-64 flex-1 flex justify-center p-6 bg-gray-800 text-white overflow-y-auto h-screen ">
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





// function App() {
//   const [vocab, setVocab] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch vocab from API
//   useEffect(() => {
//     fetch("http://localhost:3000/vocab/random?count=5") // you can change count
//       .then((res) => res.json())
//       .then((data) => {
//         setVocab(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching vocab:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>📘 Random Vocabulary</h1>
//       <ul>
//         {vocab.map((item, index) => (
//           <li key={index}>
//             <strong>{item.word}</strong> → {item.meaning}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default App
