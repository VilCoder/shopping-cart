import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext.js";

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return authContext;
}