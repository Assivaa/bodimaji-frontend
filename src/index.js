import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Information from "./pages/information";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Information />} />
          <Route path="Information" element={<Information />} />
          <Route path="Shipping" element={<Shipping />} />
          <Route path="Payment" element={<Payment />} />
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
