import React, { useEffect, useState } from "react";
import App from "../App";
import AppContext from "./AppContext";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AppState(props) {
  const url = "http://localhost:8000/api";
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const api = await axios.get(`${url}/product/all`, {
          headers: {
            "Content-Type": "Applicaion/json",
          },
          withCredentials: true,
        });
        // console.log(api.data.products);
        setProducts(api.data.products);
        setFilteredData(api.data.products);
      } catch (error) {
        console.log("error fetching products:", error);
      }
    };
    fetchProducts();
    userCart();
  }, [token]); //if this dependecy array diyana vane re render whichc so empty array diay it only runs one time on browser like while console.log

  //register user

  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        headers: {
          "content-Type": "Application/json",
        },
        withCredentials: true,
      },
    );
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    console.log("user login", api.data);
    return api.data;
  };

  //login user
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: {
          "content-Type": "Application/json",
        },
        withCredentials: true,
      },
    );
    toast.success(api.data.message);
    // console.log("user login", api.data);
    setToken(api.data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
    return api.data;
  };

  //logout user
  const logout = () => {
    setIsAuthenticated(false);
    setToken(" ");
    localStorage.removeItem("token");
    toast.success("logout successfully...!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const addToCart = async (productId, title, price, quantity, imgSrc) => {
    const api = await axios.post(
      `${url}/cart/add`,
      { productId, title, price, quantity, imgSrc },
      {
        headers: {
          "content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      },
    );
    console.log("my cart", api);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  //user cart
  const userCart = async () => {
    const api = await axios.get(`${url}/cart/user`, {
      headers: {
        "content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    // console.log("user cart", api.data.cart);
    setCart(api.data.cart);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        register,
        login,
        url,
        token,
        setIsAuthenticated,
        isAuthenticated,
        filteredData,
        setFilteredData,
        logout,
        addToCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
