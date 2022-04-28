import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import OrderList from "./components/OrderList/OrderList";
import Products from "./components/Products/Products";
import UploadProduct from "./components/UploadProduct/UploadProduct";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/uploadPd"
          element={
            <PrivateRoute>
              <UploadProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orderList"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
