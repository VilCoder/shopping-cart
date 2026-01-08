import { useRouter } from "../../hooks/useRouter.js";

export function Link({ to, children, ...restOfProps }) {
  const { navigateTo } = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    navigateTo(to);
  }

  return (
    <a href={to} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  );
}
