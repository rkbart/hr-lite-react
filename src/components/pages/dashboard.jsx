import Profile from "../profile";
import { FaRegClock } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";

function Dashboard() {
  return (
    <div className="space-y-6">
      <Profile />

      <div>
        <h2 className="text-xl font-semibold px-2">Attendance Summary</h2>
        <p className="px-2">This month: 152 hours 30 minutes</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FaRegClock size={60} className="text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold">Attendance Records</h2>
          <p className="text-gray-600 mb-4">
            Manually clock in and out to track your working hours
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
            Clock In
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FaBriefcase size={60} className="text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold">Request Leave</h2>
          <p className="text-gray-600 mb-4">
            Submit time-off requests for approval
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
            Request Leave
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FaRegNoteSticky size={60} className="text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold">Generate Payslip</h2>
          <p className="text-gray-600 mb-4">
            View and download your payroll information
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
            Generate Payslip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
