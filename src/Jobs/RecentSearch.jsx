import React from "react";

function RecentSearch() {
  return (
    <div className="p-4">
      <p className="text-center">Recent searches</p>

      <div className="flex flex-wrap gap-2 mt-8 lg:ml-64">
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          .Net
        </span>
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          Full Stack
        </span>
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          DevOps
        </span>
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          Analyst
        </span>    
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          MLOps
        </span>
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          Frontend
        </span>
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
          Backend
        </span>
        <span className="bg-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full hover:cursor-pointer">
         Remote
        </span>
      </div>
    </div>
  );
}

export default RecentSearch;
