import { useParams, Link } from 'react-router-dom';
import { hospitals } from '../data';

const StaffDetails = () => {
  const { id } = useParams();
  const hospital = hospitals.find(h => h.id === parseInt(id));

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Hospital Not Found</h1>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{hospital.name} - Staff Details</h1>
            <Link to={`/hospital/${hospital.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Hospital Details</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">👨‍⚕️</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{hospital.doctors}</div>
              <div className="text-gray-600 dark:text-gray-300">Doctors</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">👩‍⚕️</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{hospital.nurses}</div>
              <div className="text-gray-600 dark:text-gray-300">Nurses</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">🏥</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{hospital.doctors + hospital.nurses}</div>
              <div className="text-gray-600 dark:text-gray-300">Total Staff</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Departments & Specialties</h2>
              <div className="space-y-3">
                {hospital.departments.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-600 rounded">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{dept.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{dept.doctors} doctors</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((specialty, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Staff Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">By Department</h3>
                {hospital.departments.map((dept, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300">{dept.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${(dept.doctors / hospital.doctors) * 100}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">{dept.doctors}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Staff Categories</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Doctors</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${(hospital.doctors / (hospital.doctors + hospital.nurses)) * 100}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">{hospital.doctors}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Nurses</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${(hospital.nurses / (hospital.doctors + hospital.nurses)) * 100}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">{hospital.nurses}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;