import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MModal from "../../app/components/UI/MModal";
import styles from "./BudgetSetter.module.css";
import {
  selectccurrentBudget,
  selectTSM,
  updatecurrentBudget,
} from "../totalSpend/totalSpendSlice";
import {
  selectASM,
  // selectCL,
  // selectRSM,
  updateRSM,
  updateCL,
  selectPBM,
} from "../CFM/cfmSlice";

interface ChildProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BudgetSetter: React.FC<ChildProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  // const RSM = useSelector(selectRSM);
  // const CL = useSelector(selectCL);
  const BSM = useSelector(selectccurrentBudget);
  const BSM_amount = BSM.filter(
    (item: { categories: string }) => item.categories === "total"
  )[0].amount;
  const TSM = useSelector(selectTSM);
  const PBM = useSelector(selectPBM);

  // Setting the initial values
  const ASM = useSelector(selectASM);
  const fakeBudget = useSelector(selectccurrentBudget);
  const initialFoodBudget = fakeBudget.filter(
    (item: { categories: string }) => item.categories === "food"
  )[0].amount;
  const initialGroceriesBudget = fakeBudget.filter(
    (item: { categories: string }) => item.categories === "groceries"
  )[0].amount;
  const initialTransportationBudget = fakeBudget.filter(
    (item: { categories: string }) => item.categories === "transportation"
  )[0].amount;
  const initialSchoolBudget = fakeBudget.filter(
    (item: { categories: string }) => item.categories === "school"
  )[0].amount;
  // const initialTotalBudget = fakeBudget.filter(
  //   (item: { categories: string }) => item.categories === "total"
  // )[0].amount;

  const [budgetForFood, setbudgetForFood] = useState(initialFoodBudget);
  const [budgetForGroceries, setbudgetForGroceries] = useState(
    initialGroceriesBudget
  );
  const [budgetForTransportation, setbudgetForTransportation] = useState(
    initialTransportationBudget
  );
  const [budgetForSchool, setbudgetForSchool] = useState(initialSchoolBudget);
  // const [budgetForTotal, setbudgetForTotal] = useState(initialTotalBudget);

  // Updates upon input change
  const FoodChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbudgetForFood(Number(event.target.value));
    UpdateTotalAmount();
  };
  const GroceriesChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setbudgetForGroceries(Number(event.target.value));
    UpdateTotalAmount();
  };
  const TransportationChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setbudgetForTransportation(Number(event.target.value));
    UpdateTotalAmount();
  };
  const SchoolChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbudgetForSchool(Number(event.target.value));
    UpdateTotalAmount();
  };
  // const TotalChangeHandler = (event) => {
  //   setbudgetForTotal(event.target.value);
  //   UpdateTotalAmount();
  // };

  function UpdateTotalAmount() {
    const TotalToUpdate =
      Number(budgetForFood) +
      Number(budgetForGroceries) +
      Number(budgetForTransportation) +
      Number(budgetForSchool);
    return TotalToUpdate;
  }

  // const TotalToUpdate = UpdateTotalAmount();

  // Submission Change Handler
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const sumbittedForm = [
      { name: "Food", categories: "food", amount: budgetForFood },
      {
        name: "Groceries",
        categories: "groceries",
        amount: budgetForGroceries,
      },
      {
        name: "Transportation",
        categories: "transportation",
        amount: budgetForTransportation,
      },
      { name: "School", categories: "school", amount: budgetForSchool },
      { name: "Total", categories: "total", amount: UpdateTotalAmount() },
    ];

    // Making the updates
    dispatch(updatecurrentBudget(sumbittedForm));
    const RSM = Math.round(Number(BSM_amount) - Number(TSM));
    console.log(BSM_amount);
    console.log(TSM);
    console.log(RSM);
    dispatch(updateRSM(RSM));

    const CL = Math.ceil((Number(RSM) + Number(PBM)) / 10) * 10;
    console.log(CL);
    dispatch(updateCL(CL));

    // console.log(sumbittedForm);
  };

  return (
    <MModal closeModal={closeModal}>
      <div
        style={{
          fontSize: "0.8rem",
          textAlign: "left",
          paddingLeft: "1rem",
          paddingBottom: "0.5rem",
          fontWeight: "bold",
        }}
      >
        You have an available monthly spend of: <span>${ASM}</span>
      </div>
      <div
        style={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "0.8rem",
          marginLeft: "1rem",
          color: "#009688",
        }}
      >
        Budget Setter
      </div>
      <form onSubmit={submitHandler}>
        {/* Category */}
        <div className={styles.Categories_Item}>
          <label className={styles.Categories_description}>Food</label>
          <input
            className={styles.Categories_Input}
            type="number"
            onChange={FoodChangeHandler}
            value={budgetForFood}
            placeholder={budgetForFood.toString()}
          />
        </div>
        {/* Category */}
        <div className={styles.Categories_Item}>
          <label className={styles.Categories_description}>Groceries</label>
          <input
            className={styles.Categories_Input}
            type="number"
            onChange={GroceriesChangeHandler}
            value={budgetForGroceries}
            placeholder={budgetForGroceries.toString()}
          />
        </div>
        {/* Category */}
        <div className={styles.Categories_Item}>
          <label className={styles.Categories_description}>
            Transportation
          </label>
          <input
            className={styles.Categories_Input}
            type="number"
            onChange={TransportationChangeHandler}
            value={budgetForTransportation}
            placeholder={budgetForTransportation.toString()}
          />
        </div>
        {/* Category */}
        <div className={styles.Categories_Item}>
          <label className={styles.Categories_description}>School</label>
          <input
            className={styles.Categories_Input}
            type="number"
            onChange={SchoolChangeHandler}
            value={budgetForSchool}
            placeholder={budgetForSchool.toString()}
          />
        </div>
        {/* Total */}
        <div className={styles.Categories_Item}>
          <label className={styles.Categories_description_Total}>Total</label>
          <div className={styles.Categories_Input_Total}>
            {UpdateTotalAmount()}
          </div>
        </div>
      </form>
      <button onClick={submitHandler}>Update with these numbers!</button>
    </MModal>
  );
};

export default BudgetSetter;
