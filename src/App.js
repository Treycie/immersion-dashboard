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

export default App;
