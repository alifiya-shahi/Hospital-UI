const ActivityLog = () => {
  const logs = [
    { 
      time: '2023-10-01 10:00 AM', 
      action: 'Updated ICU beds to 20', 
      user: 'Dr. Smith',
      details: 'Emergency admission of 5 critical patients required bed reallocation' 
    },
    { 
      time: '2023-10-01 09:30 AM', 
      action: 'Updated General beds to 50', 
      user: 'Nurse Johnson',
      details: 'Discharged 8 patients, increasing available general beds' 
    },
    { 
      time: '2023-09-30 08:00 PM', 
      action: 'Updated Oxygen beds to 30', 
      user: 'Admin Wilson',
      details: 'New oxygen concentrators installed, expanding capacity' 
    },
    { 
      time: '2023-09-30 06:45 PM', 
      action: 'Updated Ventilator beds to 10', 
      user: 'Dr. Brown',
      details: 'Maintenance completed on 2 ventilators, back online' 
    },
    { 
      time: '2023-09-30 04:20 PM', 
      action: 'Emergency bed allocation', 
      user: 'System',
      details: 'Auto-allocated 3 ICU beds for incoming ambulance patients' 
    },
    { 
      time: '2023-09-30 02:15 PM', 
      action: 'Bed cleaning completed', 
      user: 'Maintenance Team',
      details: 'Rooms 201-205 sanitized and ready for new admissions' 
    },
    { 
      time: '2023-09-30 11:30 AM', 
      action: 'Updated General beds to 45', 
      user: 'Nurse Davis',
      details: 'Admitted 5 new patients from emergency department' 
    },
    { 
      time: '2023-09-30 09:00 AM', 
      action: 'System backup completed', 
      user: 'System',
      details: 'Daily bed availability data backed up successfully' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">📝 Activity / Update Log</h1>
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">Total Activities: {logs.length}</p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Export Log
            </button>
          </div>
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm text-gray-500 font-semibold">{log.time}</p>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {log.user}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{log.action}</h3>
                  <p className="text-gray-600 text-sm">{log.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mr-4">
              Load More
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Filter by Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;  