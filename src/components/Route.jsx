import { useRouter } from "../hooks/useRouter.js";

export function Route({ path, component }) {
  const { currentPath } = useRouter();

  if (currentPath !== path) return null;

  return component;
}
