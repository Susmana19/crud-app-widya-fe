//import eksternal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import internal
import Home from "./pages/Home/";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PrivateRoute from "./App.private";
import AuthRoute from "./App.authRoute";
import Profile from "./pages/Profile";

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
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <PrivateRoute>
                <UpdateProduct />
              </PrivateRoute>
            }
          />
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
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
