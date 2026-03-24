import { hospitals } from '../data';
import HospitalCard from '../components/HospitalCard';

const HospitalList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Hospital List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map(h => <HospitalCard key={h.id} hospital={h} />)}
        </div>
      </div>
    </div>
  );
};

export default HospitalList;