import { Link as NavLink } from "react-router";

export function Link({ to, children, ...restOfProps }) {
  return (
    <NavLink to={to} {...restOfProps}>
      {children}
    </NavLink>
  );
}
