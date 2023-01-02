import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import News from "./pages/articles/Articles.jsx";
import AllArticle from "./pages/articles/Articles.jsx";
import Article from "./pages/article/Article.jsx";
import ProductPage from "./pages/product/Product";
import Register from "./pages/register/Register.jsx";
import AllCollection from "./pages/collections/Collections.jsx";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
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
          <Route path="/articles">
            <Route index element={<AllArticle />} />
          </Route>
          <Route path="/collection">
            <Route index element={<AllCollection />} />
          </Route>
          <Route path="/product">
            <Route index element={<ProductPage />} />
          </Route>
          <Route path="/register">
            <Route index element={<Register />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
