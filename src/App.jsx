import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UserHome from './pages/UserHome';
import HospitalList from './pages/HospitalList';
import HospitalDetails from './pages/HospitalDetails';
import StaffDetails from './pages/StaffDetails';
import HospitalLogin from './pages/HospitalLogin';
import HospitalDashboard from './pages/HospitalDashboard';
import UpdateBeds from './pages/UpdateBeds';
import BedStatus from './pages/BedStatus';
import ActivityLog from './pages/ActivityLog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/hospitals" element={<HospitalList />} />
        <Route path="/hospital/:id" element={<HospitalDetails />} />
        <Route path="/hospital/:id/staff" element={<StaffDetails />} />
        <Route path="/hospital-login" element={<HospitalLogin />} />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/update-beds" element={<UpdateBeds />} />
        <Route path="/bed-status" element={<BedStatus />} />
        <Route path="/activity-log" element={<ActivityLog />} />
      </Routes>
    </Router>
  );
}

export default App;