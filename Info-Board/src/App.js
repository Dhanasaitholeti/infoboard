import { Routes, Route } from "react-router-dom";
import Allstudents from "./components/Allstudents";
import Navbar from "./components/Navbar";
import Individualstudent from "./components/IndividualStudent";
import Contactme from "./components/Contactme"



function App() {

  
  return (
    <div className="App">
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Allstudents />} />
          <Route path="/student/:id" element={<Individualstudent />} />
          <Route path="/contact-me" element={<Contactme />} />
        </Routes>
      </>
      
      
    </div>
  );
}

export default App;
