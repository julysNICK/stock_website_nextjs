import React from "react";

function Profile() {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen"
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <div className="flex justify-start">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="w-32 h-32 mt-8 rounded-full"
        />
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-xl font-bold text-gray-300">John Doe</h2>
        <p className="text-gray-500">Web Developer</p>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex justify-center pb-4">
        <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
          Edit Profile
        </a>
      </div>
    </div>
  );
}

export default Profile;
