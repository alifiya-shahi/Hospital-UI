import { useParams, Link } from 'react-router-dom';
import { hospitals } from '../data';

const HospitalDetails = () => {
  const { id } = useParams();
  const hospital = hospitals.find(h => h.id === parseInt(id));

  if (!hospital) return <div className="p-4 text-center text-red-500 text-xl">Hospital not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{hospital.name}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className="text-lg font-semibold text-gray-800 dark:text-white">{hospital.rating}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">🏥 Basic Information</h2>
              <div className="space-y-3">
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">City:</span> <span className="text-gray-600 dark:text-gray-400">{hospital.city}</span></p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Address:</span> <span className="text-gray-600 dark:text-gray-400">{hospital.address}</span></p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Contact:</span> <span className="text-gray-600 dark:text-gray-400">{hospital.contact}</span></p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Emergency Services:</span> 
                  <span className={hospital.emergencyServices ? "text-green-600 dark:text-green-400 font-bold" : "text-red-600 dark:text-red-400 font-bold"}>
                    {hospital.emergencyServices ? " Available" : " Not Available"}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">👥 Staff Information</h2>
              <div className="space-y-3">
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Doctors:</span> <span className="text-blue-600 dark:text-blue-400 font-bold">{hospital.doctors}</span></p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Nurses:</span> <span className="text-green-600 dark:text-green-400 font-bold">{hospital.nurses}</span></p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">Total Staff:</span> <span className="text-purple-600 dark:text-purple-400 font-bold">{hospital.doctors + hospital.nurses}</span></p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">🛏️ Bed Availability</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Beds</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{hospital.totalBeds}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">Available Beds</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{hospital.availableBeds}</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">ICU Beds</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{hospital.icuBeds}</p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">Oxygen Beds</p>
                <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{hospital.oxygenBeds}</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">Ventilator Beds</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{hospital.ventilatorBeds}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">🏥 Departments</h2>
              <div className="flex flex-wrap gap-2">
                {hospital.departments.map((dept, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {dept}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">🎯 Specialties</h2>
              <div className="space-y-2">
                {hospital.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
            Last Updated: {hospital.lastUpdated}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to={`/hospital/${hospital.id}/staff`} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">👥 View Staff Details</Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">📞 Request Admission</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">🚨 Emergency Call</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">📍 Get Directions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;