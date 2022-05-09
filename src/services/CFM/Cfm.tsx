import React, { useState } from "react";
import cfmStyles from "./Cfm.module.css";
import cfmFormStyles from "./CfmForm.module.css";
import CCard from "../../app/components/UI/CCard";
import MModal from "../../app/components/UI/MModal";
// import Testing from "../../app/pages/testing/Testing";

import { useSelector, useDispatch } from "react-redux";
import { selectTSM, selectccurrentBudget } from "../totalSpend/totalSpendSlice";
import {
  selectTotalBalance,
  selectbalance,
  selectSAM,
  selectAS,
  selectASM,
  selectRSM,
  selectPBM,
  selectCL,
  selectCurrentMonth,
  selectTargetMonth,
  updateSAM,
  updateASM,
  updateRSM,
  updateAS,
  updateCL,
  // updatePBM,
  updateTargetMonth,
} from "./cfmSlice";

const Cfm: React.FC = (props) => {
  // Pulling from the store
  // Global Form States
  const AvailableBalance = useSelector(selectbalance);
  const TotalBalance = useSelector(selectTotalBalance);
  const SAM = useSelector(selectSAM);
  const AS = useSelector(selectAS);
  const ASM = useSelector(selectASM);
  const BSM = useSelector(selectccurrentBudget);
  const BSM_amount = BSM.filter((item) => item.categories === "total")[0]
    .amount;
  const SM = ASM - BSM_amount;

  const PBM = useSelector(selectPBM);
  const TSM = useSelector(selectTSM);
  const RSM = useSelector(selectRSM);
  // const RSM = BSM_amount - TSM;
  // const RSM = Number(AS) - Number(TSM);
  const CL = useSelector(selectCL);
  const CurrentMonth = useSelector(selectCurrentMonth);
  const TargetMonth = useSelector(selectTargetMonth);

  // const monthNamesLong = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const displayCurrentMonth = monthNames[CurrentMonth - 1];

  // Local Form States
  const [NumberOfMonths, setNumberOfMonths] = useState("");
  const [MonthlyNeeds, setMonthlyNeeds] = useState("");
  const [FutureExpenses, setFutureExpenses] = useState("");
  const [EmergencyCash, setEmergencyCash] = useState("");
  const [OpenModal, setOpenModal] = useState(false);

  // Capturing the info with each key stroke
  const NumberOfMonthsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfMonths(event.target.value);
  };
  const MonthlyNeedsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMonthlyNeeds(event.target.value);
  };
  const FutureExpensesChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFutureExpenses(event.target.value);
  };
  const EmergencyCashChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmergencyCash(event.target.value);
  };

  ////////////////
  // Function
  ////////////////
  const dispatch = useDispatch();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      NumberOfMonths: NumberOfMonths,
      MonthlyNeeds: MonthlyNeeds,
      FutureExpenses: FutureExpenses,
      EmergencyCash: EmergencyCash,
    };

    const SAM =
      Number(formData.NumberOfMonths) * Number(formData.MonthlyNeeds) +
      Number(formData.FutureExpenses) +
      Number(formData.EmergencyCash);
    dispatch(updateSAM(SAM));

    const AS = Number(AvailableBalance) - Number(SAM);
    dispatch(updateAS(AS));

    const ASM = Math.round(
      (Number(AvailableBalance) - Number(SAM)) / Number(formData.NumberOfMonths)
    );
    dispatch(updateASM(ASM));

    const TargetMonth = +CurrentMonth + Number(formData.NumberOfMonths);
    dispatch(updateTargetMonth(TargetMonth));

    const RSM = Math.round(Number(BSM_amount) - Number(TSM));
    dispatch(updateRSM(RSM));

    const CL = Math.ceil((Number(RSM) + Number(PBM)) / 10) * 10;
    dispatch(updateCL(CL));

    // setNumberOfMonths("");
    // setMonthlyNeeds("");
    // setFutureExpenses("");
  };

  const MModalHandler = () => {
    setOpenModal(true);
  };

  // Display
  return (
    <div>
      {/* Header*/}
      <div
        style={{
          // textAlign: "cent",
          fontWeight: "bold",
          fontSize: "0.75rem",
          // marginLeft: "1rem",
          color: "#ffffff",
        }}
      >
        Current Month: August
      </div>
      {/* Allocation Overview Card */}
      <CCard>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "0.75rem",
              marginLeft: "1rem",
              color: "#009688",
            }}
          >
            Allocation Overview
          </div>
          <button
            style={{
              textAlign: "right",
              alignSelf: "center",
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
            Edit Allocation
          </button>
        </div>
        <div className={cfmStyles.expense_item}>
          <p>Total Balance</p>
          <div className={cfmStyles.expense_item__price}>${TotalBalance}</div>
        </div>
        {/* Piggy Bank Money */}
        <div className={cfmStyles.sub_item}>
          <p className={cfmStyles.sub_item}>▷▷Piggy Bank</p>
          <div className={cfmStyles.sub_item__price}>${PBM}</div>
        </div>
        <div className={cfmStyles.sub_item}>
          <p className={cfmStyles.sub_item}>▷▷Available Balance</p>
          <div className={cfmStyles.sub_item__price}>${AvailableBalance}</div>
        </div>
        {/* The rest of the data*/}
        <div className={cfmStyles.expense_item}>
          <p>
            Set Aside Money{" "}
            {!TargetMonth ? "" : `till ${monthNames[TargetMonth - 1]}`}
          </p>
          <div className={cfmStyles.expense_item__price}>${SAM}</div>
        </div>
        <div className={cfmStyles.expense_item}>
          <p>
            Money Available to Spend{" "}
            {!TargetMonth ? "" : `till ${monthNames[TargetMonth - 1]}`}
          </p>
          <div className={cfmStyles.expense_item__price}>${AS}</div>
        </div>
        <div className={cfmStyles.expense_item}>
          <p>
            Available Monthly Spend{" "}
            {!TargetMonth ? "" : `till ${monthNames[TargetMonth - 1]}`}
          </p>
          <div className={cfmStyles.expense_item__price}>${ASM}</div>
        </div>
      </CCard>
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      {/* Views for Monthly Spend */}

      {OpenModal && (
        <MModal closeModal={setOpenModal}>
          <div>
            <div
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "0.8rem",
                marginLeft: "1rem",
                color: "#009688",
              }}
            >
              Adjust Allocation
              <div></div>
            </div>
            <form className={cfmFormStyles.form} onSubmit={submitHandler}>
              <div className={cfmFormStyles.form_item}>
                <label>Budgeting this money for/until</label>
                <label style={{ fontSize: "0.6rem" }}>
                  Input number of months
                </label>
                <input
                  type="number"
                  onChange={NumberOfMonthsChangeHandler}
                  value={NumberOfMonths}
                  placeholder="E.g: 4"
                />
              </div>
              <div className={cfmFormStyles.form_item}>
                <label>$ Monthly Needs</label>
                <input
                  type="number"
                  onChange={MonthlyNeedsChangeHandler}
                  value={MonthlyNeeds}
                  placeholder="Total$ after rent, utilities etc."
                />
              </div>
              <div className={cfmFormStyles.form_item}>
                <label>$ Future Expenses</label>
                <input
                  type="number"
                  onChange={FutureExpensesChangeHandler}
                  value={FutureExpenses}
                  placeholder="E.g. Textbooks, Travel Abroad"
                />
              </div>
              <div className={cfmFormStyles.form_item}>
                <label>$ Emergency Cash</label>
                <input
                  type="number"
                  onChange={EmergencyCashChangeHandler}
                  value={EmergencyCash}
                  placeholder="Recommend 1month Spend"
                />
              </div>
            </form>
            {/* Button */}
            <div className={cfmFormStyles.form_button}>
              <button onClick={submitHandler}>
                Update with these numbers!
              </button>
            </div>
          </div>
        </MModal>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      <CCard>
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "0.75rem",
            marginLeft: "1rem",
            color: "#009688",
          }}
        >
          Overview for the month of {displayCurrentMonth}
        </div>
        <div className={cfmStyles.expense_item}>
          <p>Available Monthly Spend</p>
          <div className={cfmStyles.expense_item__price}>${ASM}</div>
        </div>
        <div className={cfmStyles.expense_item}>
          <p>
            Your targeted monthly Budget
            {/* {!TargetMonth ? "" : `till ${monthNames[TargetMonth - 1]}`} */}
          </p>
          <div className={cfmStyles.expense_item__price}>${BSM_amount}</div>
        </div>

        <div className={cfmStyles.expense_item}>
          <p>What you already spent</p>
          <div className={cfmStyles.expense_item__price}>${TSM}</div>
        </div>
        <div
          className={cfmStyles.expense_item}
          style={{ fontWeight: "bold", color: "#FF9800" }}
        >
          <p>Remaining available money spend</p>
          <div className={cfmStyles.expense_item__price}>${RSM}</div>
        </div>
      </CCard>
      {/* Savings Section */}
      <CCard>
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "0.75rem",
            marginLeft: "1rem",
            color: "#009688",
          }}
        >
          Extra Cushion Money
        </div>
        <div
          className={cfmStyles.expense_item}
          style={{ fontWeight: "bold", color: "#FF9800" }}
        >
          <p>Piggy Bank Money</p>
          <div className={cfmStyles.expense_item__price}>${PBM}</div>
        </div>
        <div className={cfmStyles.expense_item}>
          <p>Montly Savings = Available Spend - Budget</p>
          <div className={cfmStyles.expense_item__price}>${SM}</div>
        </div>
      </CCard>

      <CCard>
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "0.75rem",
            marginLeft: "1rem",
            color: "#009688",
          }}
        >
          Setting Credit Limit
        </div>
        <div className={cfmStyles.expense_item}>
          <p style={{ fontWeight: "bold", color: "#FF9800" }}>Credit Limit </p>
          <div
            className={cfmStyles.expense_item__price}
            style={{ fontWeight: "bold", color: "#FF9800" }}
          >
            ${CL}
          </div>
        </div>
      </CCard>
    </div>
  );
};

export default Cfm;
