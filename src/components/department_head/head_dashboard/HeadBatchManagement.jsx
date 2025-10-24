export const HeadBatchManagement = () => {
  // Sample data - in a real app, this would come from API calls
  const batchData = [
    { year: 2025, totalStudents: 350, status: "Open" },
    { year: 2024, totalStudents: 250, status: "Closed" },
    { year: 2023, totalStudents: 345, status: "Closed" },
    { year: 2022, totalStudents: 367, status: "Closed" },
    { year: 2021, totalStudents: 236, status: "Closed" }
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
          Enrollment Management System
        </h1>

        {/* Add New Batch Button */}
        <div className="mb-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Batch
          </button>
        </div>

        {/* Filter Section */}
        <div className="flex gap-4 mb-8">
          {/* Filter by Year */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Filter by Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Filter by Status */}
          <div className="relative">
            <input
              type="text"
              placeholder="Filter by Status (All, Open, Closed)"
              className="block w-80 px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Year</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Total Students</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {batchData.map((batch, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">{batch.year}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{batch.totalStudents}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      batch.status === "Open" 
                        ? "text-green-600" 
                        : "text-gray-900"
                    }`}>
                      {batch.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};
