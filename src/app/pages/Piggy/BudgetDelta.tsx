import React from "react";
import { useSelector } from "react-redux";
import {
  selectinputTransactions,
  selecttransList,
} from "../../../services/totalSpend/totalSpendSlice";
import { CategoriesSummaryItem } from "../../../services/ListOfTransactions/CategoriesSummaryItem";
import styles from "../../components/ListOfTransactions/CategoriesSummary.module.css";

export default function BudgetDelta() {
  ///////////////////////////////////////////////////////////////////
  // Categories Summation out of this months transaction list
  ///////////////////////////////////////////////////////////////////
  const TotalExpenseList = useSelector(selectinputTransactions);

  const ExpenseList = TotalExpenseList.filter((trans) =>
    trans.date.includes("-Jul")
  );

  // Food
  const foodExpenseList = ExpenseList.filter(
    (item) => item.categories === "food"
  );
  const totalFoodSpent = foodExpenseList.reduce((total, item) => {
    return Number(total) + Number(item.amount);
  }, 0);

  // Groceries
  const groceriesExpenseList = ExpenseList.filter(
    (item) => item.categories === "groceries"
  );
  const totalGroceriesSpent = groceriesExpenseList.reduce((total, item) => {
    return Number(total) + Number(item.amount);
  }, 0);

  // Transportation
  const transportationExpenseList = ExpenseList.filter(
    (item) => item.categories === "transportation"
  );
  const totalTransportationSpent = transportationExpenseList.reduce(
    (total, item) => {
      return Number(total) + Number(item.amount);
    },
    0
  );

  // School
  const schoolExpenseList = ExpenseList.filter(
    (item) => item.categories === "school"
  );
  const totalSchoolSpent = schoolExpenseList.reduce((total, item) => {
    return Number(total) + Number(item.amount);
  }, 0);

  // Total
  const totalSpent = ExpenseList.reduce((total, item) => {
    return Number(total) + Number(item.amount);
  }, 0);

  const summary = [
    { name: "Food", categories: "food", amount: totalFoodSpent },
    { name: "Groceries", categories: "groceries", amount: totalGroceriesSpent },
    {
      name: "Transportation",
      categories: "transportation",
      amount: totalTransportationSpent,
    },
    { name: "School", categories: "school", amount: totalSchoolSpent },
    { name: "Total", categories: "total", amount: totalSpent },
  ];

  ///////////////////////////////////////////////////////////////////
  // Current Budget
  ///////////////////////////////////////////////////////////////////
  // const fakeBudget = useSelector(selectccurrentBudget);

  const fakeBudget = [
    { name: "Food", categories: "food", amount: 200 },
    { name: "Groceries", categories: "groceries", amount: 150 },
    { name: "Transportation", categories: "transportation", amount: 50 },
    { name: "School", categories: "school", amount: 100 },
    { name: "Total", categories: "total", amount: 500 },
  ];

  ///////////////////////////////////////////////////////////////////
  // Budget Delta
  ///////////////////////////////////////////////////////////////////
  const BudgetDelta = [
    {
      id: Math.floor(Math.random() * (100000 - 0) + 0),
      name: "Food",
      budget: fakeBudget.filter((item) => item.categories === "food")[0].amount,
      spent: summary.filter((item) => item.categories === "food")[0].amount,
      delta:
        Number(
          fakeBudget.filter((item) => item.categories === "food")[0].amount
        ) -
        Number(summary.filter((item) => item.categories === "food")[0].amount),
    },
    {
      id: Math.floor(Math.random() * (100000 - 0) + 0),
      name: "Groceries",
      budget: fakeBudget.filter((item) => item.categories === "groceries")[0]
        .amount,
      spent: summary.filter((item) => item.categories === "groceries")[0]
        .amount,
      delta:
        Number(
          fakeBudget.filter((item) => item.categories === "groceries")[0].amount
        ) -
        Number(
          summary.filter((item) => item.categories === "groceries")[0].amount
        ),
    },
    {
      id: Math.floor(Math.random() * (100000 - 0) + 0),
      name: "Transportation",
      budget: fakeBudget.filter(
        (item) => item.categories === "transportation"
      )[0].amount,
      spent: summary.filter((item) => item.categories === "transportation")[0]
        .amount,
      delta:
        Number(
          fakeBudget.filter((item) => item.categories === "transportation")[0]
            .amount
        ) -
        Number(
          summary.filter((item) => item.categories === "transportation")[0]
            .amount
        ),
    },
    {
      id: Math.floor(Math.random() * (100000 - 0) + 0),
      name: "School",
      spent: summary.filter((item) => item.categories === "school")[0].amount,
      budget: fakeBudget.filter((item) => item.categories === "school")[0]
        .amount,
      delta:
        Number(
          fakeBudget.filter((item) => item.categories === "school")[0].amount
        ) -
        Number(
          summary.filter((item) => item.categories === "school")[0].amount
        ),
    },
    {
      id: Math.floor(Math.random() * (100000 - 0) + 0),
      name: "Total",
      spent: summary.filter((item) => item.categories === "total")[0].amount,
      budget: fakeBudget.filter((item) => item.categories === "total")[0]
        .amount,
      delta:
        Number(
          fakeBudget.filter((item) => item.categories === "total")[0].amount
        ) -
        Number(summary.filter((item) => item.categories === "total")[0].amount),
    },
  ];

  ///////////////////////////////////////////////////////////////////
  // Final Data for Output
  ///////////////////////////////////////////////////////////////////
  // const header = [
  //   {
  //     id: Math.floor(Math.random() * (100000 - 0) + 0),
  //     name: "Categories",
  //     spent: "Spent",
  //     budget: "Budget",
  //     delta: "Difference",
  //   },
  // ];

  const finalArray = [...BudgetDelta];
  console.log(finalArray);

  return (
    <div>
      <div>
        {/* Showing ony the delta */}
        {finalArray.map((item) => (
          <CategoriesSummaryItem
            key={item.id}
            name={item.name}
            spent={item.spent}
            budget={item.budget}
            delta={item.delta}
          />
        ))}
      </div>
    </div>
  );
}
