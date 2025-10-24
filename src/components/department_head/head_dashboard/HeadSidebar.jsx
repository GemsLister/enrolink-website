import { Link, useLocation } from "react-router";
import EnroLinkImage from "../../../assets/enrolink-logo.png";

export const HeadSidebar = () => {
  const location = useLocation();

  const tabs = [
    { 
      name: "Dashboard", 
      path: "/head/dashboard", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    },
    { 
      name: "Student Records", 
      path: "/head/student-records", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: "Batch Management", 
      path: "/head/batch-management", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: "Enrollment Officers", 
      path: "/head/enrollment-officers", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    { 
      name: "Reports", 
      path: "/head/reports", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    { 
      name: "Settings", 
      path: "/head/settings", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  const isActive = (path) => {
    if (path === "/head/dashboard") {
      return location.pathname === "/head/dashboard" || location.pathname === "/head";
    }
    return location.pathname === path;
  };

  return (
    <aside className="flex flex-col h-[100dvh] w-80 bg-gray-200">
      {/* Logo Section */}
      <div className="p-8 border-b border-gray-300">
        <Link to={"/head"}>
          <img src={EnroLinkImage} alt="EnroLink-logo" className="w-48 mx-auto" />
        </Link>
      </div>

      {/* Navigation - Centered */}
      <nav className="flex-1 flex flex-col justify-center px-12">
        <ul className="space-y-6">
          {tabs.map((tab, index) => {
            const active = isActive(tab.path);
            return (
              <li key={index} className="flex justify-center">
                <Link
                  to={tab.path}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200 group w-full max-w-48 ${
                    active
                      ? "bg-blue-800 text-white hover:bg-blue-900"
                      : "text-gray-600 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  <span className={`${active ? "text-white" : "text-gray-600 group-hover:text-white"}`}>
                    {tab.icon}
                  </span>
                  <span className="font-medium text-sm text-left">{tab.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Section - Centered */}
      <div className="p-8 border-t border-gray-300 flex justify-center">
        <Link
          to="/"
          className="flex items-center gap-3 px-6 py-3 rounded-lg text-gray-600 hover:bg-blue-800 hover:text-white transition-all duration-200 group w-full max-w-48"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-sm text-left">Logout</span>
        </Link>
      </div>
    </aside>
  );
};
