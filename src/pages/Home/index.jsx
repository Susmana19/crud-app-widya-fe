import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../../layouts";

function Home() {
  const [products, setProducts] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  const deleteProduct = async (id) => {
    try {
      await axios
        .delete(`http://localhost:7000/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setProducts(products.filter((product) => product.id_produk !== id));
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("http://localhost:7000/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setProducts(result.data.data);
        })
        .catch((err) => console.error(err));
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="my-10">
        <div className="flex justify-between w-[90%] mx-auto">
          <Layout />
          <Link to={"/profile"}>
            <button className="btn btn-primary">Go to Profile</button>
          </Link>
        </div>
        <h1 className="text-center font-bold text-2xl my-5 underline underline-offset-8 decoration-double">
          DAFTAR PRODUK
        </h1>
        <div className="relative">
          <Link to={"/add"}>
            <button className="rounded-md bg-yellow-700 px-3 py-2 text-white w-[15%] absolute right-52 text-lg font-semibold flex justify-evenly items-center hover:bg-yellow-500 hover:text-amber-800">
              <span className="text-3xl mb-1 hover:text-amber-800">&#43;</span>{" "}
              Tambah Produk
            </button>
          </Link>
        </div>
        <div className="w-[70%] mx-auto mt-24">
          <table className="table cursor-pointer border-2 border-gray-500">
            {/* head */}
            <thead>
              <tr className="text-center text-xl font-semibold border-b-2 border-b-gray-900">
                <th>NO</th>
                <th>NAMA PRODUK</th>
                <th>HARGA</th>
                <th>KATEGORI</th>
                <th>STATUS</th>
                <th colSpan={2}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {/* data */}
              {products?.map((product, index) => {
                const {
                  id_produk,
                  nama_produk,
                  harga,
                  nama_kategori,
                  nama_status,
                } = product;
                return (
                  <tr
                    key={index}
                    className="bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 border-b-1 hover:text-white border-b-gray-900"
                  >
                    <td>{index + 1}</td>
                    <td>{nama_produk}</td>
                    <td>{new Intl.NumberFormat("id-ID").format(harga)}</td>
                    <td>{nama_kategori}</td>
                    <td>{nama_status}</td>
                    <td>
                      <Link to={`/update/${id_produk}`}>
                        <button className="rounded-md bg-green-700 px-5 py-2 text-white">
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteProduct(id_produk)}
                        className="rounded-md bg-red-700 px-5 py-2 text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              {products.length === 0 && (
                <td colSpan={6} className="text-center">
                  Data masih kosong
                </td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
