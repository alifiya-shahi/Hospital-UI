import { useState } from 'react';

const UpdateBeds = () => {
  const [beds, setBeds] = useState({
    general: 50,
    icu: 20,
    oxygen: 30,
    ventilator: 10
  });

  const handleChange = (type, value) => {
    setBeds({ ...beds, [type]: parseInt(value) || 0 });
  };

  const handleUpdate = () => {
    // Only updates local state
    alert('Beds updated locally');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-4">
      <div className="container mx-auto max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🛏️ Update Bed Availability</h1>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                General Beds Available
              </label>
              <input 
                type="number" 
                value={beds.general} 
                onChange={(e) => handleChange('general', e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                min="0"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                ICU Beds Available
              </label>
              <input 
                type="number" 
                value={beds.icu} 
                onChange={(e) => handleChange('icu', e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                min="0"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Oxygen Beds Available
              </label>
              <input 
                type="number" 
                value={beds.oxygen} 
                onChange={(e) => handleChange('oxygen', e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                min="0"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ventilator Beds Available
              </label>
              <input 
                type="number" 
                value={beds.ventilator} 
                onChange={(e) => handleChange('ventilator', e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                min="0"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Update Beds
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBeds;