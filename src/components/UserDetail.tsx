import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ErrorModule from "./Error";
import Loading from "./Loading";

const UserDetails: React.FC = () => {
  const user = useSelector((state: RootState) => state.profile.user);

  const error = useAppSelector((state: RootState) => state.profile.error);
  if (error) {
    return (
      <ErrorModule message={error}>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Try Again
        </button>
      </ErrorModule>
    );
  }
  if (!user) {
    return <Loading />;
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
