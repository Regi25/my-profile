import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./MobileNavBar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Contact me", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.mobileNavbar}>
      <div className={styles.navHeader}>
        <ThemeToggle />
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <ul className={styles.menuItems}>
          {menuItems.map(({ id, href, name }) => (
            <li key={id}>
              <a href={href} onClick={toggleMenu}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default MobileNavBar;
