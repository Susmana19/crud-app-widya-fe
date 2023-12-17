import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Kamu Sudah Logout",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div>
        <button onClick={handleLogout} className="btn btn-error">
          Logout
        </button>
      </div>
    </>
  );
};

export default Layout;
