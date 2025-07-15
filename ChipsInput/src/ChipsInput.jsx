import React, { useState, useEffect } from 'react';

function ChipsInput() {
    const [inputValue, setInputValue] = useState('');
    const [allChips, setAllChips] = useState([]);

    // Load saved chips from localStorage when component mounts
    useEffect(() => {
        const savedChips = localStorage.getItem("chips");
        if (savedChips) {
            setAllChips(JSON.parse(savedChips));
        }
    }, []);

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
            e.preventDefault(); // Prevent form submission if inside a form
            if (inputValue.trim()) {
                const newChips = [...allChips, inputValue.trim()];
                setAllChips(newChips);
                localStorage.setItem("chips", JSON.stringify(newChips));
                setInputValue("");
            }
        }
    };

    const handleDelete = (index) => {
        const updatedChips = allChips.filter((_, i) => i !== index);
        setAllChips(updatedChips);
        localStorage.setItem("chips", JSON.stringify(updatedChips));
    };

    return (
        <div>
            <h1>Chips Input</h1>
            <input
                type="text"
                placeholder='Enter chips name and press Enter'
                className='border-2 border-white mt-6 rounded outline-none px-8 py-2'
                value={inputValue}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
            />

            <div className='flex flex-wrap px-5'>
                {/* List all chips here */}
                {allChips.map((chip, index) => (
                    <div 
                        key={index} 
                        className='border-none px-4 py-1.5 mt-5 bg-gray-500 mr-3 rounded-full flex items-center'
                    >
                        <span>{chip}</span>
                        <span 
                            className='ml-3 cursor-pointer text-red-600 font-extrabold'
                            onClick={() => handleDelete(index)}
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChipsInput;