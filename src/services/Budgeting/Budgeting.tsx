import { useState } from "react";
import CategoriesSummary from "../ListOfTransactions/CategoriesSummary";
import CCard from "../../app/components/UI/CCard";
import styles from "./Budgeting.module.css";
import BudgetSetter from "./BudgetSetter";

export default function Budgeting() {
  const [OpenModal, setOpenModal] = useState(false);
  const MModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <CCard>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "0.75rem",
              marginLeft: "1rem",
              color: "#009688",
            }}
          >
            Available Budget
          </div>
          <button
            style={{
              textAlign: "right",
              alignSelf: "right",
              fontWeight: "bold",
              fontSize: "0.5rem",
              padding: "0.2rem",
              marginRight: "0.5rem",
              borderColor: "#009688",
              backgroundColor: "#b2dfdb",
              borderRadius: "12rem",
              color: "#009688",
            }}
            onClick={MModalHandler}
          >
            Edit Budget
          </button>
        </div>
        <div className={styles.BudgetingItems}>
          <CategoriesSummary />
        </div>
      </CCard>
      {/* <CCard> */}
      {OpenModal && <BudgetSetter closeModal={setOpenModal} />}
      {/* </CCard> */}
    </>
  );
}
