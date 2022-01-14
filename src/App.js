
import "./App.css";
import { Route , Routes  } from "react-router-dom";

import {Home , Sign , Status , Yomenai} from './pages'
function App() {

  return (
    <div className="App">
      {/* <Link to="/invoices">Invoices</Link> |{" "}
<Link to="/expenses">Expenses</Link> */}
      
        <Routes>
          
          <Route path="/Sign" element={<Home />} />
          <Route path="/" element={<Sign />} />
          <Route path="statuswindow" element={<Status />} />
          <Route path="sekainoichibankimitsugzaarutokoro" element={<Yomenai/>} />
        </Routes>
   
      
    </div>
  );
}

export default App;



