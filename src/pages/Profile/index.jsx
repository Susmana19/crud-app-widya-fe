import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../layouts";
import { Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState([]);

  const properCase = (str) => {
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const result = arr.join(" ");

    return result;
  };

  useEffect(() => {
    const getProfile = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .get("http://localhost:7000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setProfile(result.data.data);
        })
        .catch((err) => console.error(err));
    };
    getProfile();
  }, []);
  return (
    <>
      <Link to={"/"}>
        <button className="w-[10%] mt-10 ml-10 bg-[#FFBA33] text-[#6A4029] h-10 rounded-lg text-xl font-bold">
          Back
        </button>
      </Link>
      <div className="flex justify-end mr-10">
        <Layout />
      </div>
      <h1 className="mt-5 text-center text-2xl font-bold underline underline-offset-8 decoration-double mb-5">
        MY PROFILE
      </h1>

      <div className="p-5 rounded-lg w-[35%] h-[35vh] bg-primary text-primary-content mx-auto">
        <h2 className="text-center text-xl font-bold mb-5">DATA USER</h2>
        {profile.map((item) => {
          const { id_user, nama, email, jenis_kelamin } = item;
          return (
            <div
              key={id_user}
              className="text-lg font-semibold flex flex-col gap-3"
            >
              <div className="flex items-center justify-start gap-24 border-b-2 border-white">
                <label htmlFor="">Nama :</label>
                <h2 className="">{properCase(nama)}</h2>
              </div>
              <div className="flex items-center justify-start gap-24 border-b-2 border-white">
                <label htmlFor="">Email :</label>
                <h2 className="">{email}</h2>
              </div>
              <div className="flex items-center justify-start gap-8 border-b-2 border-white">
                <label htmlFor="">Jenis Kelamin :</label>
                <h2 className="">{properCase(jenis_kelamin)}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
