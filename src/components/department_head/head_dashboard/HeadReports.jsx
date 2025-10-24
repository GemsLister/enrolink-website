export const HeadReports = () => {
  // Sample interview data
  const interviewData = [
    // Batch 2024-1
    {
      id: 1,
      candidateName: "Jerry Knight",
      interviewDate: "16/05/2026",
      result: "Passed",
      batch: "2024-1"
    },
    {
      id: 2,
      candidateName: "Thomas Ryuma",
      interviewDate: "16/05/2026",
      result: "Failed",
      batch: "2024-1"
    },
    {
      id: 3,
      candidateName: "Choi Joo-Hyuk",
      interviewDate: "17/05/2026",
      result: "Passed",
      batch: "2024-1"
    },
    {
      id: 4,
      candidateName: "Go Eun-Si",
      interviewDate: "18/05/2026",
      result: "Passed",
      batch: "2024-1"
    },
    // Batch 2024-2
    {
      id: 5,
      candidateName: "Maria Santos",
      interviewDate: "20/05/2026",
      result: "Passed",
      batch: "2024-2"
    },
    {
      id: 6,
      candidateName: "John Smith",
      interviewDate: "20/05/2026",
      result: "Passed",
      batch: "2024-2"
    },
    {
      id: 7,
      candidateName: "Sarah Johnson",
      interviewDate: "21/05/2026",
      result: "Failed",
      batch: "2024-2"
    },
    {
      id: 8,
      candidateName: "Michael Brown",
      interviewDate: "21/05/2026",
      result: "Passed",
      batch: "2024-2"
    },
    {
      id: 9,
      candidateName: "Emily Davis",
      interviewDate: "22/05/2026",
      result: "Failed",
      batch: "2024-2"
    },
    // Batch 2025-1
    {
      id: 10,
      candidateName: "David Wilson",
      interviewDate: "25/05/2026",
      result: "Passed",
      batch: "2025-1"
    },
    {
      id: 11,
      candidateName: "Lisa Garcia",
      interviewDate: "25/05/2026",
      result: "Passed",
      batch: "2025-1"
    },
    {
      id: 12,
      candidateName: "Robert Martinez",
      interviewDate: "26/05/2026",
      result: "Passed",
      batch: "2025-1"
    },
    {
      id: 13,
      candidateName: "Jennifer Lee",
      interviewDate: "26/05/2026",
      result: "Failed",
      batch: "2025-1"
    },
    {
      id: 14,
      candidateName: "Christopher Taylor",
      interviewDate: "27/05/2026",
      result: "Passed",
      batch: "2025-1"
    },
    {
      id: 15,
      candidateName: "Amanda White",
      interviewDate: "27/05/2026",
      result: "Passed",
      batch: "2025-1"
    }
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
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Interview Reports</h1>
        
        {/* Batch Selection and Generate Report */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Select Batch:</label>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Batches</option>
                <option>Batch 2024-1</option>
                <option>Batch 2024-2</option>
                <option>Batch 2025-1</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Generate Report Button */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>

        {/* Interview Outcomes Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-1">{interviewData.length}</div>
            <div className="text-sm text-gray-600">Total Candidates</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">{interviewData.filter(item => item.result === 'Passed').length}</div>
            <div className="text-sm text-gray-600">Passed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-red-600 mb-1">{interviewData.filter(item => item.result === 'Failed').length}</div>
            <div className="text-sm text-gray-600">Failed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">{Math.round((interviewData.filter(item => item.result === 'Passed').length / interviewData.length) * 100)}%</div>
            <div className="text-sm text-gray-600">Pass Rate</div>
          </div>
        </div>

        {/* Interview Report Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Candidate Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Batch
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Interview Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Result
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interviewData.map((interview) => (
                <tr key={interview.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {interview.candidateName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {interview.batch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {interview.interviewDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      interview.result === 'Passed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {interview.result}
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
