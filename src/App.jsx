import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import AllArticle from "./pages/articles/Articles.jsx";
import Article from "./pages/article/Article.jsx";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import AllProduct from "./pages/productList/ProductList.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/admin/dashboard";
import DashboardMenu from "./pages/dashboardmenu/DashboardMenu.jsx";
import DashboardArticle from "./pages/dashboardarticle/DashboardArticle.jsx";
import DashboardProduct from "./pages/dashboardproduct/DashboardProduct.jsx";
import Information from "./pages/information/Information.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Shipping from "./pages/shipping/Shipping.jsx";

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
            <Route path="product">
              <Route path="" element={<AllProduct />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin">
            <Route path="dashboard" element={<Dashboard />} />      
            <Route path="menu" element={<DashboardMenu />} />
            <Route path="article" element={<DashboardArticle />} />
            <Route path="product" element={<DashboardProduct />} />           
          </Route>
          <Route path="/checkout">
            <Route path="information" element={<Information />} /> 
            <Route path="payment" element={<Payment />} />  
            <Route path="shipping" element={<Shipping />} /> 
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
