import React, { useState } from "react";
import cfmStyles from "./Cfm.module.css";
import cfmFormStyles from "./CfmForm.module.css";
import CCard from "../../app/components/UI/CCard";

import { useSelector, useDispatch } from "react-redux";
import { selectTSM } from "../totalSpend/totalSpendSlice";
import { selectbalance, selectSAM, selectAS, selectRSM } from "./cfmSlice";

const ShortBalance_Home: React.FC<{}> = (props) => {
  // Pulling from the store

  // InputFunction
  // const [AvailableBalance, setAvailableBalance] = useState(5000);

  // const [SAM, setSAM] = useState("");
  // Global Form States

  const AvailableBalance = useSelector(selectbalance);
  const TotalSpendForTheMonth = useSelector(selectTSM);
  const SAM = useSelector(selectSAM);
  const AMS = useSelector(selectAS);
  const RSM = useSelector(selectRSM);

  // Function

  // Display
  return (
    <div>
      {/* Balance & Set Aside Money Display part */}
      <CCard>
        <div className={cfmStyles.expense_item}>
          <p>Available Balance</p>
          <div className={cfmStyles.expense_item__price}>
            ${AvailableBalance}
          </div>
        </div>
        <div className={cfmStyles.expense_item}>
          <p>Set Aside Money</p>
          <div className={cfmStyles.expense_item__price}>${SAM}</div>
        </div>
      </CCard>
    </div>
  );
};

export default ShortBalance_Home;
