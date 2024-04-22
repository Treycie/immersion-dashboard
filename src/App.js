import './App.css';
import Barchart from './components/Barchart/index';
import Doughnutchart from './components/Doughnutchart/index';
import Legendline from './components/Legendline/index';
import Linechart from './components/Linechart/index';

function App() {
  return (
    <div>
      <Linechart />
      <Barchart />
      <Doughnutchart />
      <Legendline />
    </div>
  );
}

export default App;
