import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import News from "./pages/articles/Articles.jsx";
import Tentang from "./pages/about/About.jsx";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={<Tentang />} />
    </Route>
  </Routes>
</BrowserRouter>;
}

export default App;
