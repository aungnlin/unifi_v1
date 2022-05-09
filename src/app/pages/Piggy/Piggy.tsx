import { useSelector } from "react-redux";
import CCard from "../../components/UI/CCard";
import styles from "./Piggy.module.css";
import stylesBudgeting from "../../../services/Budgeting/Budgeting.module.css";

import BudgetDelta from "./BudgetDelta";
import { selectpiggyBank } from "../../../services/totalSpend/totalSpendSlice";

export default function Piggy() {
  const piggyBankAmount = useSelector(selectpiggyBank);
  return (
    <>
      <CCard>
        <div>
          <h3 className={styles.h3}>🐷 Piggy Bank Savings 🐷</h3>
          <span className={styles.value}>${piggyBankAmount}</span>
        </div>
      </CCard>
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
            Last Month's Budget Review
          </div>
        </div>
        <div className={stylesBudgeting.BudgetingItems}>
          <BudgetDelta />
        </div>
      </CCard>
    </>
  );
}
