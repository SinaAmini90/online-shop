import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const UserDetails: React.FC = () => {
  const user = useSelector((state: RootState) => state.profile.user);

  const error = useAppSelector((state: RootState) => state.profile.error);
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!user) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin border-4 rounded-full border-blue-500 border-t-transparent w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md w-[85vw] mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">User Details</h2>
      <p>
        <span className="font-semibold">Username:</span> {user.username}
      </p>
      <p>
        <span className="font-semibold">Name:</span> {user.name.firstname}{" "}
        {user.name.lastname}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-semibold">Phone Number:</span> {user.phone}
      </p>
      <p>
        <span className="font-semibold">Address:</span> Number{" "}
        {user.address.number}, {user.address.street} street, {user.address.city}
        , Zip Code: {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserDetails;
