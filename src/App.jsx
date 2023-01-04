import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import AllArticle from "./pages/articles/Articles.jsx";
import Article from "./pages/article/Article.jsx";
import Collection from "./pages/collection/Collection";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import AllCollection from "./pages/collections/Collections.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/admin/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="article">
              <Route path="" element={<AllArticle />} />
              <Route path=":id" element={<Article />} />
            </Route>
            <Route path="collection">
              <Route path="" element={<AllCollection />} />
              <Route path=":id" element={<Collection />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
