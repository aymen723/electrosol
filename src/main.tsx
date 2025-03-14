import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./lang/i18n";
import Dashboard from "./Screens/Dashboard";
import { Settings } from "./Screens/Settings";
import { Clients } from "./Screens/Clients/Clients";
import { Projects } from "./Screens/Projects";
import { Calculations } from "./Screens/Calculations";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorScreen />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Clients",
        element: <Clients />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Calculations",
        element: <Calculations />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
