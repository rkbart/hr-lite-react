import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full p-4">
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/employees" className="text-gray-600 hover:text-blue-600">
            Employees
          </Link>
        </li>
        <li>
          <Link to="/attendance" className="text-gray-600 hover:text-blue-600">
            Attendance
          </Link>
        </li>
        <li>
          <Link to="/leaves" className="text-gray-600 hover:text-blue-600">
            Leaves
          </Link>
        </li>
        <li>
          <Link to="/payslips" className="text-gray-600 hover:text-blue-600">
            Pay Slips
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
