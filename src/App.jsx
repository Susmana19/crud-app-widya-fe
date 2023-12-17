//import eksternal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import internal
import Home from "./pages/Home/";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DetailProduct from "./pages/DetailProduct";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PrivateRoute from "./App.private";
import AuthRoute from "./App.authRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route
            path="/register"
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
