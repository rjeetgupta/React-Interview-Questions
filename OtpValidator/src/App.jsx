import React, { useEffect, useRef, useState } from "react";

function App() {
  const otp_digit = 5;
  const [inputArr, setInputArr] = useState(new Array(otp_digit).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus()
  }, [])

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1)

    setInputArr(newArr)

    newValue && refArr.current[index + 1]?.focus();
  }

  const handleKeyDown = (e, index) => {

    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1].focus();
    }
    
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 w-full h-screen text-white">
      <div className="border-2 border-gray-50 p-20 rounded-lg">
        <h1 className="text-3xl font-extrabold text-center ">Validate OTP</h1>
        <div className="mt-10">
          {inputArr.map((input, index) => {
            return (
              <input
                key={index}
                type="text"
                ref={(input) => (refArr.current[index] = input)}
                value={inputArr[index]}
                onChange={(e) => handleOnChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="text-white px-2 py-2 w-16 border-2 border-white outline-none text-center text-4xl mr-3"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
