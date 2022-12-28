import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import News from "./pages/articles/Articles.jsx";
import Tentang from "./pages/about/About.jsx";

// function App() {
//   return <BrowserRouter>
//   <Routes>
//     <Route path="/">
//       <Route index element={<Tentang />} />
//     </Route>
//   </Routes>
// </BrowserRouter>;
// import Article from "./pages/article/Article.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/about">
          <Route index element={<About />} />
        </Route>
        <Route path="/articles">
          <Route index element={<News />} />
        </Route>
        <Route path="/article">
          <Route index element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
