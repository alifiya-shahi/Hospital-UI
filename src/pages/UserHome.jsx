import { useState } from 'react';
import { hospitals } from '../data';
import HospitalCard from '../components/HospitalCard';

const UserHome = () => {
  const [searchCity, setSearchCity] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredHospitals = hospitals.filter(h => 
    h.city.toLowerCase().includes(searchCity.toLowerCase()) &&
    h.name.toLowerCase().includes(searchName.toLowerCase()) &&
    (filter === 'all' || 
     (filter === 'general' && h.availableBeds > 0) ||
     (filter === 'icu' && h.icuBeds > 0) ||
     (filter === 'oxygen' && h.oxygenBeds > 0) ||
     (filter === 'ventilator' && h.ventilatorBeds > 0))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Hospital Dashboard</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Search by hospital name" 
              value={searchName} 
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
            <input 
              type="text" 
              placeholder="Search by city" 
              value={searchCity} 
              onChange={(e) => setSearchCity(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => setFilter('all')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">All</button>
            <button onClick={() => setFilter('general')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">General Beds</button>
            <button onClick={() => setFilter('icu')} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">ICU Beds</button>
            <button onClick={() => setFilter('oxygen')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Oxygen Beds</button>
            <button onClick={() => setFilter('ventilator')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Ventilator Beds</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredHospitals.map(h => <HospitalCard key={h.id} hospital={h} />)}
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">🗺️ Map Placeholder</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Static map showing hospital locations.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;