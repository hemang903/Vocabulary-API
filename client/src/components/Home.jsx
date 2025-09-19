import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEye } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [vocab, setVocab] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMeaning, setShowMeaning] = useState(null);
    const [count, setCount] = useState("5");
    const [row, setRow] = useState(0)


    // Fetch vocab from API
    // useEffect(() => {
    //     fetch("http://localhost:3000/vocab/random?count=5") // you can change count
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setVocab(data);
    //         setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.error("Error fetching vocab:", err);
    //         setLoading(false);
    //     });
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`http://localhost:3000/vocab/random?count=${count}`)
        .then((res) => res.json())
        .then((data) => {
            setVocab(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });

    };

    if (loading) return <h2>Loading...</h2>;

    return (
        <div className='p-2 font-arial w-[60%] flex justify-cneter flex-col  '> 
            <div>

                <h1 className='text-xl'>📘 Random Vocabulary</h1>
            </div>

            <form onSubmit={handleSubmit} className='py-3 px-1 my-4 flex gap-6'>
                <input type="number"
                    name="count" 
                    value={count}
                    id="count" 
                    onChange={(e) => setCount(e.target.value)}
                    className='bg-gray-700 px-2 border rounded-md'
                    required
                />
                <button type="submit" className='bg-blue-800 text-white px-4 py-1 rounded-md text-lg'>
                    Get Words
                </button>

            </form>
            
            <ul>
                {vocab.map((item, index) => (
                <li key={index} className='flex gap-4 border-dashed border m-1 p-2 text-lg items-center rounded'>
            
                    <FontAwesomeIcon icon={faEye} 
                        className="text-blue-500 cursor-pointer hover:text-sky-900" 
                        onClick={() =>
                            setShowMeaning(showMeaning === index ? null : index)
                        }
                    />
                    <div className='flex gap-10'>

                        <strong className='capitalize'>{item.word}</strong> 
                        <span>→</span>
                        <p className={showMeaning === index ? "block" : "hidden"}>{item.meaning}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
