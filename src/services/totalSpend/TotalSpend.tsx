import { useSelector, useDispatch } from "react-redux";
import { updateRewardsBalance } from "../Rewards/rewardsSlice";
import { incrementTSM, selectTSM } from "./totalSpendSlice";
import {
  selectCL,
  selectRSM,
  // selectASM,
  updateRSM,
  updateCL,
  selectPBM,
} from "../CFM/cfmSlice";

import styles from "./TotalSpend.module.css";
import CCard from "../../app/components/UI/CCard";
import {
  selectccurrentBudget,
  updatetransList,
  selecttransList,
} from "./totalSpendSlice";

export function TotalSpend() {
  // Global Values Set
  const TSM = useSelector(selectTSM);
  // const ASM = useSelector(selectASM);
  const RSM = useSelector(selectRSM);
  const PBM = useSelector(selectPBM);
  const oldExpenseList = useSelector(selecttransList);
  const currentBudget = useSelector(selectccurrentBudget);
  const currentBudgetAmount = currentBudget.filter((i) => {
    return i.name === "Total";
  })[0].amount;
  console.log(currentBudgetAmount);
  // const { amount: currentBudgetAmount } = currentBudget;

  // const updatedtransList = useSelector(selecttransList);

  const CL = useSelector(selectCL);
  const dispatch = useDispatch();

  // Setting up the format for current date
  // const month = date_formatted.toLocaleString("en-US", { month: "short" });
  // const day = date_formatted.toLocaleString("en-US", { day: "2-digit" });
  // const year = date_formatted.getFullYear();

  // Local Values Set
  // const [incrementAmount, setIncrementAmount] = useState("1");

  // Functions
  const makeUpdates = () => {
    // Update TSM
    dispatch(incrementTSM());
    // Update RSM
    const RSM_new = RSM - 5;
    dispatch(updateRSM(RSM_new));
    // Update CL
    const CL_new = Math.ceil((Number(RSM_new) + Number(PBM)) / 10) * 10;
    dispatch(updateCL(CL_new));

    dispatch(updateRewardsBalance());

    const categoriesWheel = ["school", "food", "transportation", "groceries"];

    // Creating a transaction log
    const transNewItem = {
      id: Math.floor(Math.random() * (100000 - 0) + 0),
      title: `Testing : Random category selected`,
      amount: "5.00",
      categories:
        categoriesWheel[Math.floor(Math.random() * categoriesWheel.length)],
      date: "2022-Aug-18",
    };

    const newExpenseList = [transNewItem, ...oldExpenseList];
    dispatch(updatetransList(newExpenseList));

    // add a transaction to the transaction list
  };

  return (
    <>
      <CCard>
        <div>
          <h3 className={styles.h3}>💸 Total spent for this month 💸</h3>
          <span className={styles.value}>
            ${(Math.round(TSM * 100) / 100).toFixed(2)}
          </span>
        </div>
      </CCard>

      <CCard>
        <h3 className={styles.h3}>💸 Virtual Card Swipe Simulator 💸</h3>
        <div className={styles.expense_item}>
          <p className={styles.expense_item}>Current Budget for the month :</p>
          <div className={styles.expense_item__price}>
            ${currentBudgetAmount}
          </div>
        </div>

        <div className={styles.expense_item}>
          <p className={styles.expense_item}>
            Remaining Spend for this month :
          </p>
          <div className={styles.expense_item__price}>${RSM}</div>
        </div>
        <div className={styles.expense_item}>
          <p className={styles.expense_item}> Credit limit : </p>
          <div className={styles.expense_item__price}>${CL}</div>
        </div>
        {/* Swpit the card function */}
        <button
          style={{
            textAlign: "right",
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "0.5rem",
            borderColor: "#f57c00",
            backgroundColor: "#f57c00",
            borderRadius: "12rem",
            margin: "0",
            color: "#ffffff",
          }}
          onClick={makeUpdates}
        >
          Swipe the card & spend $5
        </button>
      </CCard>
    </>
  );
}
