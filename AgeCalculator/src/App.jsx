import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputDate, setInputDate] = useState('');
  const [age, setAge] = useState(null);

  const handleOnChange = (e) => {
    setInputDate(e.target.value);
  }

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(inputDate);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDays += daysInPrevMonth;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
  };


  const handleClick = () => {
    if (!inputDate) {
      alert('Please select a date');
      return;
    }

    setAge(calculateAge());
  }

  return (
    <div className='m-w-1/2 m-auto border-2 border-white px-15 py-5 rounded-lg'>
      <h1 className='text-4xl font-bold p-8'>Age Calculator</h1>
      <input type="date"
        value={inputDate}
        onChange={handleOnChange}
        className='w-full border-2 border-[#bdc3c7] px-5 py-3 rounded-lg text-2xl box-shadow-lg'
      />
      <button
        onClick={handleClick}
        className='w-full border-2 border-[#bdc3c7] px-5 py-3 rounded-lg text-2xl box-shadow-lg mt-5 bg-teal-500 text-[#222] hover:bg-teal-600 font-semibold cursor-pointer'>Calculate Age</button>

      <div className='mt-5 text-2xl text-green-500'>
        {age && (
          <p>
            {age.years} Years, {age.months} Months, {age.days} Days
          </p>
        )}

      </div>
    </div>


  )
}

export default App
