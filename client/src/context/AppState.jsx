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
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);

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
        userProfile();
      } catch (error) {
        console.log("error fetching products:", error);
      }
    };
    fetchProducts();
    userCart();
  }, [token,reload]); //if this dependecy array diyana vane re render whichc so empty array diay it only runs one time on browser like while console.log

  useEffect(() => {
    const lstoken = localStorage.getItem("token");
    console.log("is token", lstoken);

    if (lstoken) {
      setToken(lstoken);
      setIsAuthenticated(true);
    }
  }, []);

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
    // setToken(api.data.token);
    console.log(api.data.token);

    //i am using token form direct API response reload garda save navayara
    const receivedToken = api.data.token;

    localStorage.setItem("token", receivedToken);

    //now aba chai update gareko statelai
    setToken(receivedToken);
    setIsAuthenticated(true);

    console.log("token saved to local storage", localStorage.getItem("token"));

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
    // console.log("user login", api.data);
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

  //user profile
  const userProfile = async () => {
    const api = await axios.get(`${url}/user/profile`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    console.log("user profile", api.data.user);
    setUser(api.data.user);
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
    setReload(!reload)
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

  // decrease quantity
  const decreaseQuantity = async (productId, quantity) => {
    const api = await axios.post(`${url}/cart/--quantity`, {
      productId,
      quantity
    },{
      headers:{
        "Content-Type":"Application/json",
        Auth:token,

      },
      withCredentials:true
    }
  );
  setReload(!reload);
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

  //remove item form cart
  const removeFromCart = async (productId) => {
    const api = await axios.delete(`${url}/cart/remove/${productId}`,{
      headers:{
        "Content-Type":"Application/json",
        Auth:token,
      },
      withCredentials:true
    }
  );
  setReload(!reload);
  console.log("remove item form cart",api);
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

  return (
    <AppContext.Provider
      value={{
        products,
        register,
        login,
        url,
        token,
        setToken,
        setIsAuthenticated,
        isAuthenticated,
        filteredData,
        setFilteredData,
        logout,
        user,
        addToCart,
        cart,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
