import React from "react";
import styles from "./Canvas.module.css";

interface ChildProps {
  children: any;
}

const Canvas: React.FC<ChildProps> = ({ children }) => {
  return <div className={styles.class}>{children}</div>;
};

export default Canvas;
