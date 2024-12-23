import React from "react";

export default function Loading() {
  return (
    <div className="flex h-[50vh] justify-center items-center">
      <div className="spinner-border animate-spin border-4 rounded-full border-blue-500 border-t-transparent w-8 h-8" />
    </div>
  );
}
