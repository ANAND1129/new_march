import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Whole from "./components/Whole";
import Standard1 from "./components/Standard1";
import Standard2 from './components/Standard2';

function App() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/standard1" element={<Standard1 />} />
        <Route path="/standard2" element={<Standard2 />} />   
        <Route path="/" element={<Whole/>}/>
      </Routes>
    </Router>
  );
}

export default App;