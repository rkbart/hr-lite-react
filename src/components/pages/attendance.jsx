import Profile from '../../components/profile';

function Attendance() {
  return (
    <div className="space-y-6">
      <Profile />
      <div>
        <h2 className="text-xl font-semibold">Attendance Records</h2>
        {/* Attendance table or logic here */}
      </div>
    </div>
  );
}

export default Attendance;
