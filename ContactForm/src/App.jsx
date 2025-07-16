import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [formInput, setFormInput] = useState({
    fullName: "",
    email: "",
    messages: ""
  })
  const [errors, setErrors] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState(null)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formInput.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formInput.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formInput.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formInput.messages.trim()) {
      newErrors.messages = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedName(formInput.fullName);
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", messages: "" });
    }
  }


  return (
    <div className='flex justify-center items-center'>
      {
        isSubmitted ? (
          <div className='border-2 border-white rounded-2xl px-15 py-10 mt-45'>
            <h1 className='text-green-600'>Thank you, {submittedName}! your form is submitted Succussfully</h1>
          </div>
        ) : (
          <div className='w-1/3 flex flex-col mx-auto  border-2 border-gray-100 rounded-lg px-15 py-5 my-35 '>
            <h1 className='text-4xl text-green-600 text-center p-5'>Contact form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col flex-wrap w-full space-y-2'>
              <label htmlFor="fullName">Name : </label>
              <input
                type="text"
                placeholder='Enter Your Full Name here...'
                name='fullName'
                id='fullName'
                value={formInput.fullName}
                onChange={handleOnChange}
                className='border-2 border-white px-5 py-2 rounded-lg'
              />
              {errors.fullName && <span className='text-red-500'>{errors.fullName}</span>}


              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder='Enter your email here...'
                name="email"
                id="email"
                value={formInput.email}
                onChange={handleOnChange}
                className='border-2 border-white px-5 py-2 rounded-lg'
              />
              {errors.email && <span className='text-red-500'>{errors.email}</span>}

              <label htmlFor="messages">Messages : </label>
              <textarea
                name="messages"
                placeholder='Type your message here...'
                id="messages"
                cols="15"
                rows="5"
                value={formInput.messages}
                onChange={handleOnChange}
                className='border-2 border-white px-5 py-2 rounded-lg'
                ></textarea>
                {errors.messages && <span className='text-red-500'>{errors.messages}</span>}

              <button type="submit" className='bg-green-700 mt-5 px-3 py-2 rounded-lg text-black text-xl'>Submit</button>
            </form>

          </div>
        )
      }
    </div>
  )
}

export default App
