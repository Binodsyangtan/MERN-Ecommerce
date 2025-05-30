import React, { useEffect, useState } from "react";
import App from "../App";
import AppContext from "./AppContext";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppState(props) {
  const url = "https://mern-ecommerce-binod.onrender.com/api";
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState([]);
  // const [permisssions, setPermisssions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);

  //checkout
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [userAddress, setUserAddress] = useState("")

  //blogs
  const [blogs, setBlogs] = useState([]); // State to store blogs
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(""); // State to show errors

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
    getAddress();//jaba reload hunxa taba fetch vayra aauxa address
  }, [token, reload]); //if this dependecy array diyana vane re render whichc so empty array diay it only runs one time on browser like while console.log

  useEffect(() => {
    const lstoken = localStorage.getItem("token");
    const lspermissions = localStorage.getItem("permissions");
    const storedRole = localStorage.getItem("role");
    console.log("is token", lstoken);
    console.log("permissions", lspermissions);
    console.log("role", storedRole);

    if (lstoken) {
      setToken(lstoken);
      setIsAuthenticated(true);
    }
  }, []);

  //register user

  const register = async (name, email, password, role) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password, role },
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
    const permissions = api.data.permissions;
    const role = api.data.role;

    localStorage.setItem("token", receivedToken);
    localStorage.setItem("permissions", JSON.stringify(permissions));
    localStorage.setItem("role", JSON.stringify(role));

    //now aba chai update gareko statelai
    setToken(receivedToken);
    setIsAuthenticated(true);

    console.log("token saved to local storage", localStorage.getItem("token"));
    console.log(
      "permission saved to local storage",
      localStorage.getItem("permissions"),
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
    // console.log("user login", api.data);
    return api.data;
  };

  // const handleLoginNavigation = (permissions) =>{
  //   if(permissions.includes("user")){
  //     navigate("/products")
  //   }else if(permissions.includes("seller")){
  //     navigate("/Contact")
  //   }else{
  //     navigate("/")
  //   }
  // }

  //logout user
  const logout = () => {
    setIsAuthenticated(false);
    setToken(" ");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("permissions");
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
    setReload(!reload);
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
    const api = await axios.post(
      `${url}/cart/--quantity`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      },
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
    const api = await axios.delete(`${url}/cart/remove/${productId}`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
    setReload(!reload);
    console.log("remove item form cart", api);
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

  ///cart total cost
  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);


//shipping address add
  const shippingAddress = async (
    fullName,
    address,
    city,
    state,
    country,
    pincode,
    phoneNumber,
  ) => {
    const api = await axios.post(
      `${url}/address/add`,
      { fullName, address, city, state, country, pincode, phoneNumber },
      {
        headers: {
          "content-Type": "Application/json",
          Auth: token,
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

    return api.data;
  };


  //get old address

const getAddress = async()=>{
  const api = await axios.get(`${url}/address/get`,{
    headers:{
      "Content-Type":"Application/json",
      Auth:token
    },
    withCredentials:true,
  });

  // console.log("user address",api.data.userAddress);
  setUserAddress(api.data.userAddress)
}



  //show blogs or fetch blogs
  useEffect(() => {
    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${url}/blog/getblogs`);
        setBlogs(response.data.blogs || []); // Assuming 'blogs' is in the response
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);



  

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
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
        qty,
        price,
        shippingAddress,
        userAddress,
        blogs,
        setBlogs,
        loading,
        error,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
