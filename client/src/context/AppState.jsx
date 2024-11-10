import React,{useEffect, useState} from "react";
import AppContext from "./AppContext";
import axios from 'axios'

function AppState(props) {
    const url = "http://localhost:8000/api";
    const [products, setProducts] = useState([])
    const [token, setToken] = useState([])
    const [isAuthenticated, setAuthenticated] = useState(false)
    
    useEffect(() =>{
      const fetchProducts = async() =>{
        try {
          const api = await axios.get(`${url}/product/all`,{
            headers:{
              "Content-Type":"Applicaion/json",
            },
            withCredentials:true,
          });
          // console.log(api.data.products);
          setProducts(api.data.products);
          
          
        } catch (error) {
          console.log("error fetching products:",error);
          
        }
      };
      fetchProducts();

    },[])//if this dependecy array diyana vane re render whichc so empty array diay it only runs one time on browser like while console.log

   

  //register user

  // const register = async(name,email,password) =>{
  //   const api = await axios.post(`${url}/user/register`,
  //     {name,email,password},{
  //       headers:{"Content-Type":"Application/jspon",
  //       body:JSON.stringify({name,email,password})

  //       },
  //       withCredentials:true,

  //   });
  //   console.log("user register",api);
    

  // }
  
  
  return (
    <AppContext.Provider value={{products,}}>{props.children}</AppContext.Provider>
  );
}

export default AppState;
