import { Link } from 'react-router-dom';

const getStatusColor = (available) => {
  if (available > 50) return 'bg-green-500';
  if (available > 10) return 'bg-yellow-500';
  return 'bg-red-500';
};

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{hospital.name}</h3>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-white">{hospital.rating}</span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-1">📍 {hospital.city}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-1">🏥 {hospital.departments.length} Departments</p>
      <p className="text-gray-600 dark:text-gray-300 mb-3">👨‍⚕️ {hospital.doctors} Doctors, 👩‍⚕️ {hospital.nurses} Nurses</p>
      
      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <p className="text-gray-600 dark:text-gray-300">Available Beds: <span className="font-bold text-blue-600 dark:text-blue-400">{hospital.availableBeds}</span></p>
        <p className="text-gray-600 dark:text-gray-300">ICU: <span className="font-bold text-purple-600 dark:text-purple-400">{hospital.icuBeds}</span></p>
        <p className="text-gray-600 dark:text-gray-300">Oxygen: <span className="font-bold text-green-600 dark:text-green-400">{hospital.oxygenBeds}</span></p>
        <p className="text-gray-600 dark:text-gray-300">Ventilators: <span className="font-bold text-red-600 dark:text-red-400">{hospital.ventilatorBeds}</span></p>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded-full ${getStatusColor(hospital.availableBeds)}`}></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {hospital.availableBeds > 50 ? 'Good Availability' : hospital.availableBeds > 10 ? 'Limited' : 'Full'}
          </span>
        </div>
        {hospital.emergencyServices && (
          <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">Emergency</span>
        )}
      </div>
      
      <Link to={`/hospital/${hospital.id}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-full text-center">View Details</Link>
    </div>
  );
};

export default HospitalCard;