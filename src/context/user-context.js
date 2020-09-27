import { createContext, useContext } from "react";

export const UserSessionContext = createContext({
  token: localStorage.getItem("token"),
  infoUsuario: localStorage.getItem("infoUsuario"),
  login: () => {},
  logout: () => {},
});

export function useUserSession() {
  const { token, infoUsuario, login, logout } = useContext(UserSessionContext);
  return { token, infoUsuario, login, logout };
}
