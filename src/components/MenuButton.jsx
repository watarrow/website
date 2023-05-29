import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuButton = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <FontAwesomeIcon
      icon={faBars}
      className="menu-button-icon"
      onClick={() => setMenuOpen(true)}
    />
  );
};
export default MenuButton;
