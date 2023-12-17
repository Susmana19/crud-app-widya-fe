import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    nama: "",
    email: "",
    jenis_kelamin: "",
    password: "",
  });
  // const [validate, setValidate] = useState({ error: false, message: "" });
  const handleRegister = (e) => {
    e.preventDefault();

    if (registerForm.nama === "") {
      return alert("nama harus diisi");
    } else if (registerForm.email === "") {
      return alert("email harus diisi");
    } else if (registerForm.password === "") {
      return alert("password harus diisi");
    } else if (registerForm.jenis_kelamin === "") {
      return alert("Jenis Kelamin harus dipilih");
    }

    axios
      .post("http://localhost:7000/auth/register", registerForm)
      .then((res) => {
        console.log(res.data.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/");
    }
  });

  return (
    <>
      <h1 className="mt-5 text-center text-2xl font-bold underline underline-offset-8 decoration-double mb-5">
        REGISTER
      </h1>
      <form
        onSubmit={handleRegister}
        className="flex w-[90%] mx-auto justify-evenly"
      >
        {/* form section */}
        <div className="w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="product-name" className="text-xl font-semibold">
                Nama :
              </label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    nama: e.target.value,
                  })
                }
                type="text"
                id="product-name"
                className="border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Nama Kamu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="product-price" className="text-xl font-semibold">
                Email :
              </label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    email: e.target.value,
                  })
                }
                type="email"
                id="product-price"
                className="remove-arrow border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Email Kamu"
              />
            </div>
            <div className="flex flex-col gap-3">
              {/* Password*/}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-price"
                  className="text-xl font-semibold"
                >
                  Password :
                </label>
                <input
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  id="product-price"
                  className="remove-arrow border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                  placeholder="Masukkan Password"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="product-category"
                  className="text-xl font-semibold"
                >
                  Jenis Kelamin :
                </label>
                <div className="flex items-center">
                  <select
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        jenis_kelamin: e.target.value,
                      })
                    }
                    id="product-category"
                    className="select select-bordered w-full max-w-xs text-xl"
                  >
                    <option disabled selected className="text-lg">
                      Pilih Jenis Kelamin
                    </option>
                    <option value="pria" className="text-lg">
                      Pria
                    </option>
                    <option value="wanita" className="text-lg">
                      Wanita
                    </option>
                  </select>
                </div>
              </div>

              <button
                id="form-submit"
                type="submit"
                className="mt-5 text-center cursor-pointer hover:text-[#6A4029] hover:bg-[#FFBA33] px-5 py-3 text-xl font-bold rounded-md bg-[#6A4029] text-[#FFBA33]"
              >
                Register
              </button>
              <div className="mt-10 w-full">
                <p className="text-center">Sudah punya akun? login disini</p>
                <Link to={"/login"}>
                  <button
                    id="form-submit"
                    type="submit"
                    className="mt-5 w-full text-center cursor-pointer text-[#6A4029] bg-[#FFBA33] px-5 py-3 text-xl font-bold rounded-md hover:bg-[#6A4029] hover:text-[#FFBA33]"
                  >
                    Login disini
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
export default Register;
