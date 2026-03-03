import { useAuth } from "../../hooks/useAuth";
// import { useAuthStore } from "../../store/authStore";

function AuthButton() {
  console.log("render auth button");
  const { isLoggedIn, login, logout } = useAuth();

  const buttonStyles = {
    padding: "0.5rem 1.5rem",
    fontSize: "0.7rem",
    fontWeight: "500",
    backgroundColor: "#d1d5db",
    borderRadius: "0.4rem",
    color: "#0f172a",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
  }

  return isLoggedIn
    ? <button style={buttonStyles} onClick={logout}>Logout</button>
    : <button style={buttonStyles} onClick={login}>Login</button>;
}

export function Header({ children }) {
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#fff",
  };

  return (
  <header style={headerStyles}>
    {children}
    <AuthButton />
  </header>
  )
}
