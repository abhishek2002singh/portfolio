import { BrowserRouter, Route, Routes } from "react-router-dom";
import HandleFooter from "./component/HandleFooter";
import SkillsProvide from "./component/SkillsProvide";
import Jobs from "./component/Jobs";
import About from "./component/About";
import Contact from "./component/Contact";
import Body from "./component/Body";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
      
          <Route path="/" element={<HandleFooter />} >
          <Route path="/" element={<Body />} />
          <Route path="/skills" element={<SkillsProvide />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
