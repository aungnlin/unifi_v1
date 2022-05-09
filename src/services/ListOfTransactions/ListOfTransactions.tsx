import React from "react";
import ExpenseItem from "./ExpenseItem";
import style from "./ListOfTransactions.module.css";
import CCard from "../../app/components/UI/CCard";
import { selecttransList } from "../totalSpend/totalSpendSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ListOfTransactions() {
  const ExpenseList = useSelector(selecttransList);

  return (
    <CCard>
      {/* <h3 style={{ color: "#ff7e00", fontWeight: "bold" }}> */}
      <div
        style={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "0.75rem",
          marginLeft: "1rem",
          color: "#009688",
        }}
      >
        List of Transactions
      </div>

      <div className={style.ListOfTransactions}>
        {ExpenseList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            categories={expense.categories}
          />
        ))}
      </div>
    </CCard>
  );
}
