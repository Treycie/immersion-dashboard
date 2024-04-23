import './App.css';
import Dashboard from './components/Dashboard.jsx'
import Test from './components/Test.js';
import SearchBar from './components/searchBar.jsx';
import StatCard from './components/trash.jsx';

function App() {
  return (
    <div className="App">
      {/* <Test/>  */}
     {/* <SearchBar />  */}
     {/* <StatCard /> */}

     <Dashboard />
    </div>
  );
}
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//import { Sidebar } from 'antd';

import RideData from "./pages/RideData";
import { Operational } from "./pages/Operational";
import UserAnalysis from "./pages/UserAnalysis";
import CoreMetrics from "./pages/metrics/CoreMetrics";
import LandingPage from "./pages/landing/LandingPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {index: true, element: <LandingPage/>},
      { path: "dashboard", element: <Dashboard /> },
      { path: "ridedata", element: <RideData /> },
      { path: "operational", element: <Operational /> },
      { path: "useranalysis", element: <UserAnalysis /> },
      { path: "coremetrics", element: <CoreMetrics /> },
    ],
  },
  {
    
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
