for Token (nov-29)

    -- However, React's state updates (setToken) are asynchronous, meaning the token value isn't updated immediately. When localStorage.setItem("token", token) runs, it's using the previous state of token, which is still undefined or empty.

for solution 
    -- we need to get token form directly using the token form the API response 
    
    -const receivedToken = api.data.token;
     localStorage.setItem("token", receivedToken);

     //after this update the state

     --setToken(receivedToken);
    setIsAuthenticated(true);



--reload 
    -(for real time putput ) moiley banako xiana banaunu parxa for better experience

    --and moiley banaua usestate banauni relaod ko and useeffect chalne bela token ko side ma dini and kuun kun thau ma chaihnxa tya setReload(!reload )  garni initiallly false rakhya hunxa so !reload le true garera relaoad garidinxa
    





//

  // Handle form submission for updating the blog
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedBlog = {
//       ...blog,
//       tags: blog.tags.split(",").map((tag) => tag.trim()), // Convert tags to an array
//     };

//     try {
//       const response = await axios.put(
//         `http://localhost:8000/api/blog/update/${id}`,
//         updatedBlog,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.data.success) {
//         alert("Blog updated successfully!");
//         navigate(`/blog/${id}`); // Redirect to the updated blog's detail page
//       }
//     } catch (error) {
//       console.error("Error updating blog:", error);
//       alert("An error occurred while updating the blog.");
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Convert tags from a comma-separated string into an array
      const formattedTags = tags
        .replace(/[\[\]"]/g, "") // Remove square brackets and quotes
        .split(",") // Split by comma
        .map((tag) => tag.trim()); // Trim whitespace from each tag
  
      const updatedBlog = {
        title,
        content,
        author,
        tags: formattedTags,
        category,
        imgSrc,
      };
  
      const response = await axios.put(
        `http://localhost:8000/api/blog/update/${id}`, 
        updatedBlog,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.data.success) {
        alert("Blog updated successfully!");
        navigate("/blogs"); // Redirect to the blogs list
      } else {
        alert("Failed to update the blog: " + response.data.message);
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("An error occurred while updating the blog.");
    }
  };