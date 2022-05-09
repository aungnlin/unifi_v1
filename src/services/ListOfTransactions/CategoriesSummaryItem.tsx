import React from "react";
import style from "./CategoriesSummaryItem.module.css";

// style = "color:red";

interface ChildProps {
  delta: number;
  spent: number;
  budget: number;
  name: string;
}

export const CategoriesSummaryItem: React.FC<ChildProps> = (props) => {
  const delta = Math.round(props.delta);

  // const header = [
  //   {
  //     id: Math.floor(Math.random() * (100000 - 0) + 0),
  //     name: "Categories",
  //     spent: "Spent",
  //     budget: "Budget",
  //     delta: "Difference",
  //   },
  // ];

  return (
    <>
      <div className={style.Categories_Container}>
        <div className={style.Categories_TextPart}>
          {/* Categories Name */}
          <div className={style.Categories_description}>{props.name}</div>
          {/* Actual spent vs. Budgeted */}
          <div className={style.Categories_TextPart2}>
            <div className={style.Categories_actualSpent}>
              Total Spent: {/* <span style={{ color: "#00796b" }}> */}$
              {Math.round(props.spent)}
              {/* </span> */}, Budgeted: ${props.budget}
            </div>
            {/* <div className={style.Categories_Budgeted}> </div> */}
          </div>
        </div>

        <div
          className={style.Categories_delta}
          style={{
            textAlign: "center",
            flexGrow: 1,
            justifyContent: "center",
            color: delta < 0.99 ? "red" : "green",
            // backgroundColor: "orange",
          }}
        >
          ${Math.round(props.delta)}
        </div>
      </div>
    </>
  );
};

// return (
//   <>
//     <div className={style.Categories_Container}>
//       <div className={style.Categories_description}>{props.name}</div>

//       <div style={{ marginRight: "0.8rem", justifyContent: "left" }}>
//         {Math.round(props.spent)}
//       </div>
//       <div style={{ marginRight: "0.8rem", justifyContent: "left" }}>
//         {props.budget}
//       </div>
//       <div
//         style={{
//           alignSelf: "right",
//           color: delta < 0.99 ? "red" : "green",
//         }}
//       >
//         {Math.round(props.delta)}
//       </div>
//     </div>
//   </>
// );
// }
