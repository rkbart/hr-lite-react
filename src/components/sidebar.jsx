function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full p-4">
      <ul className="space-y-4">
        <li className="font-medium text-gray-700">Dashboard</li>
        <li className="text-gray-600">Settings</li>
        <li className="text-gray-600">Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
