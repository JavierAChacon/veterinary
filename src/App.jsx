import Header from "./components/Header.jsx"
import Form from "./components/Form.jsx"
import PatientList from "./components/PatientList.jsx"
import { useState } from "react"

function App() {

  const [patients, setPatients] = useState([])

  return (
    <div className="container mx-auto mt-10 ">
      <Header />
      <div className="mt-8 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
        />
        <PatientList 
          patients = {patients}
        />
      </div>
    </div>
  )
}

export default App
