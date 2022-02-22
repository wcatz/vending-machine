const axios = require("axios");
import { useState } from "react"

const Check = () => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("form");
  const [error, setError] = useState(null);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleReset = () => {
    setStep("form");
    setError(null);
  };

  const handleSubmit = async e => {
    e.preventDefault()
    await sleep(1000);

    console.log("submit address:", address);
    setLoading(true);

    await sleep(1000);
    
    if (!/addr1[a-z0-9]{98}/i.test(address)) {
      return res.status(422).json({ error: "Not a valid Shelley address" });
    }

    try {
      const response = await axios.request({
        method: "get",
        url: "http://localhost:3000/api/" + address,
      })

      setAddress("");
      setStep("submitted");

      console.log("result: ", response.data);
    } catch (e) {
      setStep("error");
      if (e.response && e.response.data && e.response.data.error) {
        setError(e.response.data.error);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {loading ? <div>loading...</div> : null}
      {step === "form" ? (
        <form onSubmit={handleSubmit} className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div>
            <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="address">
              Enter wallet or staking address
              <p className="text-green-400 text-center mb-4 mt-4 h-2">{address}</p>
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
      ) : null}
      {step === "submitted" ? (
        <>
          <div>Thanks for submitting your address!</div>
        </>
      ) : null}
      {step === "error" ? (
        <div className="text-red-400">
          {error}
          <div className="mt-5 mb-5">
            <button
              className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white hover:text-gray-100 font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="submit"
              onClick={handleReset}
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Check;