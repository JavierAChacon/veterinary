import Header from "./components/Header.jsx"
import Form from "./components/Form.jsx"
import PatientList from "./components/PatientList.jsx"

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-8 md:flex">
        <Form />
        <PatientList />
      </div>

    </div>
  )
}

export default App
