import React, { useState, useEffect } from "react";
import getInfo from "./getInfo";
import getUrl from "./url";

const AuthContext = React.createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AuthProvider = ({ children }) => {
  const baseUrl = getUrl();
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInfo(baseUrl + "/user");
      setCurrentUser(data);
    };
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
      fetchData();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
