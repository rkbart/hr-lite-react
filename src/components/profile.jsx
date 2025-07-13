import { FaUserCircle } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex justify-start gap-4 ">
      <FaUserCircle size={50} />
      <div className = "flex flex-col justify-start">
        <h1 className="text-xl font-semibold">John Doe</h1>
        <h2>Software Engineer</h2>
      </div>
    </div>
  );
}

export default Profile;
