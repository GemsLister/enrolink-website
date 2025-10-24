export const HeadDashboard = () => {
  // Sample data - in a real app, this would come from API calls
  const metrics = {
    totalStudents: 345,
    interviewed: 250,
    passedInterview: 200,
    enrolled: 150,
    awol: 50
  };

  const recentActivities = [
    "Santiago Garcia added a student.",
    "Santiago Garcia added a student.",
    "Santiago Garcia edited a student.",
    "Santiago Garcia added a student.",
    "Santiago Garcia archive a student."
  ];

  const batchStats = [
    { batch: "2024-1", count: 120 },
    { batch: "2024-2", count: 95 },
    { batch: "2024-3", count: 80 },
    { batch: "2023-4", count: 65 },
    { batch: "2023-3", count: 45 },
    { batch: "2023-2", count: 30 }
  ];

  const maxCount = Math.max(...batchStats.map(stat => stat.count));

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

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Total Students */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metrics.totalStudents}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>

          {/* Interviewed */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metrics.interviewed}</div>
            <div className="text-sm text-gray-600">Interviewed</div>
          </div>

          {/* Passed Interview */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metrics.passedInterview}</div>
            <div className="text-sm text-gray-600">Passed Interview</div>
          </div>

          {/* Enrolled */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metrics.enrolled}</div>
            <div className="text-sm text-gray-600">Enrolled</div>
          </div>

          {/* AWOL */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metrics.awol}</div>
            <div className="text-sm text-gray-600">AWOL</div>
          </div>
        </div>

        {/* Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Enrollment Statistics per Batch */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Enrollment Statistics per Batch</h3>
            <div className="space-y-4">
              {batchStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 text-sm text-gray-600 font-medium">{stat.batch}</div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gray-600 h-4 rounded-full transition-all duration-300"
                        style={{ width: `${(stat.count / maxCount) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-sm text-gray-900 font-medium text-right">{stat.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{activity}</span>
                </div>
              ))}
              <div className="pt-2">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  see more...
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
            Manage Batches
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Assign Officer
          </button>
        </div>
    </div>
  );
};
