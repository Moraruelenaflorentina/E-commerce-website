import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(backendUrl + '/api/user/admin', {
        email,
        password,
      })

      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-full border border-gray-700">
        <h1 className="text-2xl font-bold mb-4 text-gray-100">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-300 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="rounded-md w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-700 outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-300 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="rounded-md w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-700 outline-none"
              placeholder="Enter your password"
              required
            />
            
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>
      </div>

    </div>
  )
}

export default Login
