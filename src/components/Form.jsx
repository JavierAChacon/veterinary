
const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-3xl text-center">Form</h2>
      <p className="text-center text-lg mt-1 mb-5">Add patients and <span className="text-indigo-600 font-bold">Manage them</span></p>

      <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-5 mx-5">
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">Pet name</label>
          <input id="petName" type="text" placeholder="Name of the pet" className="border-2 w-full p-2 rounded-lg" />
        </div>

        <div className="mb-5">
          <label htmlFor="ownerName" className="block text-gray-700 uppercase font-bold">Owner name</label>
          <input id="ownerName" type="text" placeholder="Name of pet owner" className="border-2 w-full p-2 rounded-lg" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" type="email" placeholder="Owner's contact email" className="border-2 w-full p-2 rounded-lg" />
        </div>

        <div className="mb-5">
          <label htmlFor="dischargeDate" className="block text-gray-700 uppercase font-bold">Date</label>
          <input id="dischargeDate" type="date" className="border-2 w-full p-2 rounded-lg" />
        </div>

        <div className="mb-3">
          <label htmlFor="symptons" className="block text-gray-700 uppercase font-bold">Symptons</label>
          <textarea id="symptons" placeholder="Describe the symptons" cols="30" rows="5" className="border-2 w-full p-2 rounded-lg" />
        </div>

        <input type="submit" className="bg-indigo-600 block mx-auto px-3 py-2 rounded-xl text-white hover:bg-indigo-800 cursor-pointer transition-all" value="Add pacient"/>
      </form>

    </div>
  )
}

export default Form