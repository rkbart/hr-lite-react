import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import Employees from "./components/pages/employees";
import Attendance from "./components/pages/attendance";
import Leaves from "./components/pages/leaves";
import Payslips from "./components/pages/payslips";

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="h-screen overflow-hidden">
      {!isLoginPage && <Header />}
      <div className={`flex ${isLoginPage ? "pt-0" : "pt-16"} h-full`}>
        {!isLoginPage && <Sidebar />}
        <main
          className={`flex-1 ${
            isLoginPage ? "" : "bg-gray-100 p-4"
          } overflow-y-auto`}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/payslips" element={<Payslips />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Layout;
