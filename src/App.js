
import './App.css';
import Barchart from './components/Barchart/index';
import Doughnutchart from './components/Doughnutchart/index';
import Legendline from './components/Legendline/index';
import Linechart from './components/Linechart/index';
import Map from './components/Map/index';




function App() {
  return (
    <div>
      <Linechart />
      <Barchart />
      <Doughnutchart />
      <Legendline />
      <Map />
      
      
      
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
