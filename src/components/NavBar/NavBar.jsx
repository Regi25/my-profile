import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./NavBar.module.css";

function NavBar() {
  const menuItems = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Contact me", href: "#contact" },
  ];
  return (
    <nav className={styles.navbar}>
      <ThemeToggle />
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          {menuItems.map(({ id, href, name }) => (
            <li key={id}>
              <a href={href}>
                <h3>{name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
