import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("test logout");

    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={handleLogout}
          className="btn btn-error absolute left-10"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Layout;
