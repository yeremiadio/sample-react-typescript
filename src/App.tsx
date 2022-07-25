import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page0 />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
