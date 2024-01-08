import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  email : "",
  isLoggedIn: false,
  Login: () => {},
  Logout: () => {},
  AddEmail : () => {},
  RemoveEmail : () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);


  const isLoggedIn = !!token;
  const LoginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const LogOutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const AddEmailHandler = (email)=>{
    console.log("addhandler",email)
    localStorage.setItem("email", email);
    setEmail(email);
  }

  const RemoveEmailHandler = ()=>{
    localStorage.removeItem("email");
    setEmail(null);
  }
//   useEffect(() => {
//     let pid = setTimeout(() => {
//         // console.log("timeout")
//       LogOutHandler();
//     }, 600000);
//     return (
//         // console.log("cleanup",pid),
//         clearTimeout(pid)
//     )
//   });

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    email : email,
    Login: LoginHandler,
    Logout: LogOutHandler,
    RemoveEmail: RemoveEmailHandler,
    AddEmail: AddEmailHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
