import TimeDisplay from "./timeDisplay";

function Header( { onLogout } ) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-blue-600 text-white flex items-center justify-between px-6 shadow z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Hr Lite</h1>
        <h2 className="italic text-md">
          Simple HR management made light and easy
        </h2>
      </div>
      <div className = "flex justify-between items-center gap-2">
        <TimeDisplay />
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
