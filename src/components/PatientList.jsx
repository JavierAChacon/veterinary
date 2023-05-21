import Patient from "./Patient"
const PatientList = ({ patients }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients.length > 0 ? (
        <>
          <h2 className="font-bold text-3xl text-center">Patient List</h2>
          <p className="text-center text-lg mt-1">Manage your <span className="font-bold text-indigo-600">Patients and Dates</span></p>
        </>
      ) : (
        <>
          <h2 className="font-bold text-3xl text-center">There are no patients</h2>
          <p className="text-center text-lg mt-1">Start adding patients and <span className="font-bold text-indigo-600">will appear here</span></p>
        </>
      )
      }

      <div className="md:overflow-y-scroll h-screen">
        {patients.map(patient => <Patient info={patient} key={patient.id} />)}
      </div>

    </div>
  )
}

export default PatientList