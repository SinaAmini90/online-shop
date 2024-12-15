import React from "react";

interface ErrorModuleProps {
  message: string;
  children?: React.ReactNode;
}

const ErrorModule: React.FC<ErrorModuleProps> = ({ message, children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-red-100 rounded-lg shadow-md w-full sm:w-1/2 mx-auto my-4">
      <p className="text-red-600 font-semibold text-lg mb-4">
        Error: {message}
      </p>
      {children && <div className="mb-4">{children}</div>}
    </div>
  );
};

export default ErrorModule;
