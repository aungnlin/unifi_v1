import Budgeting from "../../../services/Budgeting/Budgeting";
import BudgetSetter from "../../../services/Budgeting/BudgetSetter";
import ListOfTransactions from "../../../services/ListOfTransactions/ListOfTransactions";
import Canvas from "../../components/UI/Canvas";
import { TotalSpend } from "../../../services/totalSpend/TotalSpend";
import LastMonthPiggy from "../../../services/Budgeting/LastMonthPiggy";

export default function Spend() {
  return (
    <>
      <Canvas>
        <TotalSpend />
        <Budgeting />
        <LastMonthPiggy />
        <ListOfTransactions />
      </Canvas>
    </>
  );
}
