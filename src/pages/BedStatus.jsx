const BedStatus = () => {
  const beds = [
    { type: 'General', available: 50 },
    { type: 'ICU', available: 20 },
    { type: 'Oxygen', available: 30 },
    { type: 'Ventilator', available: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">📋 Bed Status Management</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-4 text-left font-semibold text-gray-700">Bed Type</th>
                <th className="border border-gray-300 p-4 text-left font-semibold text-gray-700">Available</th>
                <th className="border border-gray-300 p-4 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {beds.map((bed, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 text-gray-800">{bed.type}</td>
                  <td className="border border-gray-300 p-4 text-gray-800 font-bold text-green-600">{bed.available}</td>
                  <td className="border border-gray-300 p-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BedStatus;