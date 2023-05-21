import { useState, useEffect } from "react"



const Form = ({ patients, setPatients }) => {

  const [petName, setPetName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptons, setSymptons] = useState('')

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
  }

  const handleSubmit = e => {
    e.preventDefault()

    //Almacenar los datos en un objeto
    const newPatient = {
      petName,
      ownerName,
      email,
      dischargeDate,
      symptons,
      id: generateId()
    }
    //Agregamos con un metodo que no transmuta el array
    setPatients([...patients, newPatient])

    //Volvemos a colocar por defecto el form luego de haberlo enviado
    setPetName("")
    setOwnerName("")
    setEmail("")
    setDischargeDate("")
    setSymptons("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-3xl text-center">Form</h2>
      <p className="text-center text-lg mt-1 mb-5">Add patients and <span className="text-indigo-600 font-bold">Manage them</span></p>

      <form
        className="bg-white shadow-md rounded-lg p-5 mb-5 mx-5"
        onSubmit={handleSubmit}
      >

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petName"
          >Pet name
          </label>
          <input
            className="border-2 w-full p-2 rounded-lg"
            required
            id="petName"
            type="text"
            placeholder="Name of the pet"
            value={petName}
            onChange={e => setPetName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="ownerName"
          >Owner name
          </label>
          <input
            id="ownerName"
            required
            className="border-2 w-full p-2 rounded-lg"
            type="text"
            placeholder="Name of pet owner"
            value={ownerName}
            onChange={e => setOwnerName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >Email
          </label>
          <input
            className="border-2 w-full p-2 rounded-lg"
            required
            id="email"
            type="email"
            placeholder="Owner's contact email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="dischargeDate"
          >Date
          </label>
          <input
            className="border-2 w-full p-2 rounded-lg"
            required
            id="dischargeDate"
            type="date"
            value={dischargeDate}
            onChange={e => setDischargeDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptons"
          >Symptons
          </label>
          <textarea
            className="border-2 w-full p-2 rounded-lg"
            required
            id="symptons"
            placeholder="Describe the symptons"
            cols="30" rows="5"
            value={symptons}
            onChange={e => setSymptons(e.target.value)}
          />
        </div>

        <input
          className="bg-indigo-600 block mx-auto px-3 py-2 rounded-xl text-white hover:bg-indigo-800 cursor-pointer transition-all" value="Add patient"
          type="submit"
        />
      </form>
    </div>
  )
}

export default Form