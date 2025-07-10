import React, { useState } from 'react';
import accordian from "./data";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10'>
      <div className='w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 shadow-2xl'>
        <h1 className='text-3xl text-center p-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500'>
          Knowledge Accordion
        </h1>
        <div className='space-y-3'>
          {accordian.map((data, index) => (
            <div 
              key={index}
              className='rounded-lg overflow-hidden border border-gray-700 transition-all duration-300'
            >
              <div 
                className='flex justify-between items-center p-4 bg-gray-700/50 hover:bg-gray-700/70 cursor-pointer transition-colors'
                onClick={() => toggleAccordion(index)}
              >
                <h2 className='text-xl font-medium text-gray-100'>{data.title}</h2>
                <span className='text-2xl font-light text-teal-400'>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className='p-4 bg-gray-800/80 text-gray-300'>
                  {data.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;