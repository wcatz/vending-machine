const axios = require("axios");
import { useState } from 'react'

const Check = () => {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    
    console.log("submit address:", address);
    
    try {
      const response = await axios.request({
        method: 'get',
        url: 'http://localhost:3000/api/' + address,
      })

      setMessage('success')
      const rewards = response.data;
      console.log(rewards);
      
    } catch (e) {
      console.log(e.message);
      setMessage('No one is getting any tokens!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="address">
          Enter wallet or staking address
        </label>
        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          id="address"
          type="text"
          placeholder="stake1u8fracseqlzq0yvlrwgyq778np0kexgj4cgd3er4vf95vqs5pafza"
        />
      </div>

      <div className="flex items-center justify-between pt-4">
        <button
          className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white hover:text-gray-100 font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Check;