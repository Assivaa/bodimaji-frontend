import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import News from "./pages/articles/Articles.jsx";
import Article from "./pages/article/Article.jsx";
import AllCollection from "./pages/collections/Collections";
import ProductPage from "./pages/product/Product.jsx";

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
        <Route path="/news">
          <Route index element={<News />} />
        </Route>
        <Route path="/article">
          <Route index element={<Article />} />
        </Route>
        <Route path="/collection">
          <Route index element={<AllCollection />} />
        </Route>
        <Route path="/product">
          <Route index element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
