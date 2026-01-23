// import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export function useRouter() {
  // const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const handlePathChange = () => {
  //     setCurrentPath(window.location.pathname);
  //   };

  //   window.addEventListener("popstate", handlePathChange);

  //   return () => window.removeEventListener("popstate", handlePathChange);
  // }, []);

  const navigateTo = (path) => {
    // window.history.pushState({}, "", path);
    // window.dispatchEvent(new PopStateEvent("popstate"));    
    navigate(path);
  };

  return { currentPath: location.pathname, navigateTo };
}
