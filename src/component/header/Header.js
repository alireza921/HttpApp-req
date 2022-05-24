import Navigation from "../Navigation/Navigation";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2> this is header </h2>
      <Navigation />
    </header>
  );
};

export default Header;
