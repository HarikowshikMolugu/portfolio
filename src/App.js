import Main from "./components/main";

import Pagenotfound from "./components/pagenotfound";
import "./components/main.css";
import Navbar from "./components/navbar";
import { Route, Routes} from "react-router-dom";
function App() {
  return (
    <div style={{backgroundColor:'#000328'}} transition-style="in:wipe:up">
       
    <Navbar/>
      <Routes>

        
        
        
        <Route path='/' element={<Main />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>
      </div>
  );
}

export default App;
