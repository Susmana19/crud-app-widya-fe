import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
      navigate("/");
    } else {
      setIsLogin(false);
    }
  }, []);

  return !isLogin ? children : null;
};

export default AuthRoute;
