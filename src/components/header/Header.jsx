export function Header({ children }) {
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#fff",
  };

  return <header style={headerStyles}>{children}</header>;
}
