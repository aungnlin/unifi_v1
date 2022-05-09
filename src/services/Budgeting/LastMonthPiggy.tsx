import React from "react";
import CCard from "../../app/components/UI/CCard";
import styles from "./LastMonthPiggy.module.css";
import { Link } from "react-router-dom";

export default function LastMonthPiggy() {
  return (
    <CCard>
      <div className={styles.container}>
        <div>
          <p style={{ fontSize: "0.8rem" }}>
            🎉 You spent{" "}
            <text style={{ fontWeight: "bold", color: "#FF9800" }}>$200</text>{" "}
            less than budgeted in July! 🎉
          </p>
        </div>
        <div className={styles.container2}>
          <p>That's saved to the piggy bank!</p>
          <Link to="/piggy">
            <button>Learn more</button>
          </Link>
        </div>
      </div>
    </CCard>
  );
}
