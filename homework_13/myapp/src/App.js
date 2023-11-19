import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import { useState } from "react";
import { blog_data, work_data } from "./datas";
import Footer from "./components/Footer/Footer";
import WorkListPage from "./pages/WorkListPage/WorkListPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  const [workList, setWorkList] = useState(work_data);

  const [blogList, setBlogList] = useState(blog_data);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage workList={workList} blogList={blogList} />}/>
          <Route path="/blog" element={<BlogPage blogList={blogList} />} />
          <Route path="/works" element={<WorkListPage workList={workList} />} />
          <Route path="/work/:id" element={<WorkPage workList={workList} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
