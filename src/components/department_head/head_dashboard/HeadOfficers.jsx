export const HeadOfficers = () => {
  // Sample data - in a real app, this would come from API calls
  const officers = [
    { name: "Gong Wook", assignedBatch: "Batch A" },
    { name: "Nam Joo Suk", assignedBatch: "Batch D" },
    { name: "Park Bo Hyuk", assignedBatch: "Batch F" },
    { name: "Go Min Ji", assignedBatch: "Batch B" },
    { name: "Bae Ji Eun", assignedBatch: "Batch D" }
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="search"
            className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* User Controls */}
        <div className="flex items-center space-x-4">
          {/* Notifications Bell */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5L9 15l4.5 4.5" />
            </svg>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Enrollment Officers
      </h1>

      {/* Officers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officers.map((officer, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            {/* Officer Info */}
            <div className="flex items-center space-x-4 mb-4">
              {/* Profile Icon */}
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Officer Details */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{officer.name}</h3>
                <p className="text-sm text-gray-600">Assigned: {officer.assignedBatch}</p>
              </div>
            </div>

            {/* Manage Button */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
