import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";
import { HeadLayout } from "./components/department_head/head_dashboard/HeadLayout.jsx";
import { HeadDashboard } from "./components/department_head/head_dashboard/HeadDashboard.jsx";
import { HeadOfficers } from "./components/department_head/head_dashboard/HeadOfficers.jsx";
import { HeadStudentRecords } from "./components/department_head/head_dashboard/HeadStudentRecords.jsx";
import { HeadBatchManagement } from "./components/department_head/head_dashboard/HeadBatchManagement.jsx";
import { HeadLogout } from "./components/department_head/head_dashboard/HeadLogout.jsx";
import { HeadReports } from "./components/department_head/head_dashboard/HeadReports.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/head",
    element: <HeadLayout />,
    children: [
      { index: true, element: <HeadDashboard /> },
      { path: "dashboard", element: <HeadDashboard /> },
      { path: "student-records", element: <HeadStudentRecords /> },
      { path: "batch-management", element: <HeadBatchManagement /> },
      { path: "enrollment-officers", element: <HeadOfficers /> },
      { path: "reports", element: <HeadReports /> },
    ],
  },
  { path: "/logout", element: <HeadLogout /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="378594673413-182rtb2h8nrit0l1jt253jedgavpcdb9.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
