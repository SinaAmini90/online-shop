import React from "react";

// Define types for your props if needed
interface AppProps {
  title: string;
}

// Example of a functional component with typed props
const App: React.FC<AppProps> = ({ title }) => {
  return <p>hi</p>;
};

export default App;
