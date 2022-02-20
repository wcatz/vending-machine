
const Check = () => {
  return (
    <form onSubmit="[address]" className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="">
        Enter wallet or staking address
      </label>
      <input
        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        name=""
        id=""
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