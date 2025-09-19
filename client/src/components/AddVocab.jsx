import React from 'react'
import { useState } from 'react';

const AddVocab = () => {

    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page reload

        try {
        const res = await fetch("http://localhost:3000/vocab/add", {
            method: "POST",
            headers: {
            "Content-Type": "application/json", // important!
            },
            body: JSON.stringify({ word, meaning }),
        });

        const data = await res.json();
        console.log(data.word)
        console.log(data.meaning)
        if (res.ok) {
            setMessage(`✅ ${data.word +" : "+ data.meaning}`);
            setWord("");
            setMeaning("");
        } else {
            setMessage(`❌ ${data.error || "Failed to add word"}`);
        }
        } catch (err) {
        setMessage("❌ Error: " + err.message);
        }
    };

    return (
        <div className='w-[60%]  '>
            <div className='p-2  '>
                <h2 className='text-2xl'>➕ Add New Vocabulary</h2>

                <form onSubmit={handleSubmit} className='p-4  '>
                    <input
                        type="text"
                        placeholder="Enter word"
                        className='p-1 rounded-md text-xl bg-gray-800 border-solid border-2 border-cyan-800 outline-2 outline-offset-2 outline-solid'
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        required
                    />
                    <br /><br />

                    <input
                        type="text"
                        placeholder="Enter meaning"
                        value={meaning}
                        className=' p-1 text-xl rounded-md bg-gray-800 border-cyan-800 border-solid border-2'
                        onChange={(e) => setMeaning(e.target.value)}
                        required
                    />
                    <br /><br />

                    <button type="submit" className='bg-sky-600 p-2 text-xl rounded-lg hover:bg-blue-900'>Add Word</button>
                </form>

                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default AddVocab
