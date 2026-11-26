import { useState } from "react";
import { createContext } from "react";
export const NavBarContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);

  return (
    <NavBarContext.Provider value={[navOpen, setNavOpen]}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavContext;
