import React from "react";
import styles from "./MModal.module.css";

interface ChildProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
}

const MModal: React.FC<ChildProps> = ({ closeModal, children }) => {
  // Functions
  const ModalHandler = () => {
    closeModal(false);
  };

  // Display
  return (
    // <div className="modalBackground">
    <>
      <div className={styles.modalContainer}>
        {/* Close Button */}
        <div className={styles.titleCloseBtn}>
          <button onClick={ModalHandler}>x</button>
          {/* <button>x</button> */}
        </div>

        {/* Middle Part */}
        <div>{children}</div>

        {/* Footer Section */}
        {/* <div className={styles.footer}>
          {" "}
          <button
            onClick={props.closeModal}
            id="cancelBtn"
            // className={styles.cancelBtn}
            styles={{ backgroundColor: "red" }}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}
      </div>
    </>
  );
};

export default MModal;
