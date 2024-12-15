import React from "react";
import ErrorModule from "../components/Error";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  return (
    <ErrorModule message="404 Error, Page not found ">
      <button
        onClick={handleClickButton}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Home Page
      </button>
    </ErrorModule>
  );
};

export default NotFound;
