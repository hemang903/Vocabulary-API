import React, { useEffect, useState } from "react";

function Allvocab() {
  const [vocab, setVocab] = useState([]);

  useEffect(() => {
    fetch("https://vocabulary-practice.onrender.com/vocab/all")
      .then((res) => res.json())
      .then((data) => setVocab(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-2 w-[60%] ">
      <h2 className="text-xl mb-4">📘 All Vocabulary</h2>
      <ul>
        {vocab.map((item, i) => (
          <li key={i} className="border-dashed border-sky-200 border m-2 p-2">
            <div className="flex gap-7">

            <strong className='capitalize'>{item.word}</strong> 
            <span>→</span> 
            <p>{item.meaning}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Allvocab;
