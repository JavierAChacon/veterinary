
const Patient = ({info}) => {

    const {petName, ownerName, email, dischargeDate, symptons } = info
    
    return (
        <div className="m-5 bg-white rounded-xl shadow-md p-5">
            <p className="font-bold mb-2 text-gray-700 uppercase">
                Name: <span className="font-normal normal-case">{petName}</span>
            </p>

            <p className="font-bold mb-2 text-gray-700 uppercase">
                Owner: <span className="font-normal normal-case">{ownerName}</span>
            </p>

            <p className="font-bold mb-2 text-gray-700 uppercase">
                Email: <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-2 text-gray-700 uppercase">
                Discharge Date: <span className="font-normal normal-case">{dischargeDate}</span>
            </p>

            <p className="font-bold mb-2 text-gray-700 uppercase">
                Symptons: <span className="font-normal normal-case">{symptons}</span>
            </p>
        </div>
    )
}

export default Patient