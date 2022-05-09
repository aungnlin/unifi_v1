import React from "react";
import style from "./ExpenseItem.module.css";

interface ChildProps {
  date: string;
  title: string;
  categories: string;
  amount: string;
}

const ExpenseItem: React.FC<ChildProps> = (props) => {
  // Tweaking the date formatting
  const date_formatted = new Date(props.date);
  const month = date_formatted.toLocaleString("en-US", { month: "short" });
  const day = date_formatted.toLocaleString("en-US", { day: "2-digit" });

  // display
  return (
    <div className={style.ExpenseContainer}>
      {/* Date */}
      <div className={style.expense_date}>
        <div className={style.expense_date__month}>{month}</div>
        <div className={style.expense_date__day}>{day}</div>
      </div>
      {/* Top line */}
      <div className={style.ExpenseItem_description}>
        <div>{props.title}</div>
        <div className={style.ExpenseItem_categories}>{props.categories}</div>
      </div>
      <div className={style.ExpenseItem_price}>${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
