import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  var user = localStorage.getItem("user");
  const [userInfo, setUserInfo] = useState(user || {});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const UserState = () => {
  return useContext(UserContext);
};
