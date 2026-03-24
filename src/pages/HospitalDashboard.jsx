import { Link } from 'react-router-dom';

const HospitalDashboard = () => {
  // Mock stats, in real app from state or props
  const stats = {
    totalBeds: 500,
    availableBeds: 50,
    icuBeds: 20,
    oxygenBeds: 30,
    ventilatorBeds: 10
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">🏥 Hospital Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Beds</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalBeds}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Beds</h3>
            <p className="text-3xl font-bold text-green-600">{stats.availableBeds}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">ICU Beds</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.icuBeds}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Oxygen Beds</h3>
            <p className="text-3xl font-bold text-teal-600">{stats.oxygenBeds}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Ventilator Beds</h3>
            <p className="text-3xl font-bold text-red-600">{stats.ventilatorBeds}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📊 Charts Placeholder</h3>
          <p className="text-gray-600">Visual indicators for bed availability.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link to="/update-beds" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Update Bed Availability</Link>
          <Link to="/bed-status" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Bed Status Management</Link>
          <Link to="/activity-log" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Activity Log</Link>
        </nav>
      </div>
    </div>
  );
};

export default HospitalDashboard;