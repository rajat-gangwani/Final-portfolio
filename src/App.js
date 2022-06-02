import Navbar from "./components/Navbar/Navbar";
import "./app.css"
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Resume from "./components/Resume/resume";
import Projects from "./components/projects/projects";
import Blogs from "./components/Blogs/blogs";
import Mylearning from "./components/myLearnings/Mylearning";


function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/mylearings" element={<Mylearning/>}/>
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
