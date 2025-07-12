import './index.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './components/pages/dashboard';
import Employees from './components/pages/employees';
import Attendance from './components/pages/attendance';
import Leaves from './components/pages/leaves';
import Payslips from './components/pages/payslips';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="h-screen overflow-hidden">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <div className="flex pt-16 h-full">
          <Sidebar />
          <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/leaves" element={<Leaves />} />
              <Route path="/payslips" element={<Payslips />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
