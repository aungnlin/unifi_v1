import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

interface ChildProps {
  props?: any;
}

const Navbar: React.FC<ChildProps> = () => {
  return (
    <>
      <div className={styles.logo}>Unifi - Neobank for college students</div>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <Link to="/readme" style={{ textDecoration: "none" }}>
            Readme
          </Link>
          <br />
          {/* <Link to="/" style={{ textDecoration: "none" }}>
            🏠 Home
          </Link> */}
          <Link to="/cfm" style={{ textDecoration: "none" }}>
            🏠 Home
            {/* 🎚 CFM */}
          </Link>
          <br />
          <Link to="/spend" style={{ textDecoration: "none" }}>
            💳 Spend
          </Link>
          {/* <br />
          <Link to="/rewards" style={{ textDecoration: "none" }}>
            ⭐️ Rewards
          </Link> */}
          <br />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
