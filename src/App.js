import './index.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Sidebar + Content */}
      <div className="flex pt-16 h-full">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          {/* Main content goes here */}
          <h1 className="text-xl font-semibold">Welcome to the Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
