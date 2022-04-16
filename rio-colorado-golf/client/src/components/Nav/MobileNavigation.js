import NavLinks from "./NavLinks";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburger = (
    <FiMenu
      className="Hamburger"
      size="40px"
      color="#092d5b"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiOutlineClose
      className="Hamburger"
      size="40px"
      color="#092d5b"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="MobileNavigation">
      {open ? closeIcon : hamburger}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
