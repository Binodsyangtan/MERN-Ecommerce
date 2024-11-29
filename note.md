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
    