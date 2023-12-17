import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginForm.email === "") {
      return alert("email harus diisi");
    } else if (loginForm.password === "") {
      return alert("password harus diisi");
    }

    axios
      .post("http://localhost:7000/auth/login", loginForm)
      .then((res) => {
        const token = res?.data?.data?.token;
        const data_user = res?.data?.data?.user;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("data_user", JSON.stringify(data_user));

        navigate("/");
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "Login Berhasil",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        setError(err?.response?.data?.message);
      });
  };

  return (
    <>
      <h1 className="mt-20 text-center text-2xl font-bold underline underline-offset-8 decoration-double mb-5">
        LOGIN
      </h1>
      <form
        onSubmit={handleLogin}
        className="flex w-[90%] mx-auto justify-evenly"
      >
        {/* form section */}
        <div className="w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="product-price" className="text-xl font-semibold">
                Email :
              </label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    email: e.target.value,
                  })
                }
                type="email"
                id="product-price"
                className="remove-arrow border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Email Kamu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="product-price" className="text-xl font-semibold">
                Password :
              </label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
                type="password"
                id="product-price"
                className="remove-arrow border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Password"
              />
            </div>
            {error && <p className="text-md text-red-500">{error}</p>}
            <div className="flex flex-col gap-3">
              <button
                id="form-submit"
                type="submit"
                className="mt-5 text-center cursor-pointer hover:text-[#6A4029] hover:bg-[#FFBA33] px-5 py-3 text-xl font-bold rounded-md bg-[#6A4029] text-[#FFBA33]"
              >
                Login
              </button>
              <div className="mt-10 w-full">
                <p className="text-center">
                  Belum Punya Akun? Silahkan Register Dahulu
                </p>
                <Link to={"/register"}>
                  <button
                    id="form-submit"
                    type="submit"
                    className="mt-5 w-full text-center cursor-pointer text-[#6A4029] bg-[#FFBA33] px-5 py-3 text-xl font-bold rounded-md hover:bg-[#6A4029] hover:text-[#FFBA33]"
                  >
                    Register Disini
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
