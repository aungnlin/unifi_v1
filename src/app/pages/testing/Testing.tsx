import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectNowDate,
  updateNowDate,
} from "../../../services/Testing/testingSlice";
import MModal from "../../components/UI/MModal";

export default function Testing() {
  // const displayData = useSelector(selectNowDate);
  const currentMonth = useSelector(selectNowDate);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const displayData = monthNames[currentMonth - 1];

  // const newTargetDate = Date(2022, 3, 1);

  const dispatch = useDispatch();
  const dateChanger = () => {
    // dispatch(updateNowDate(newTargetDate));
    <h1>Hello</h1>;
  };

  return (
    <div>
      {/* <h1>This is testing</h1> */}
      {/* <div>{displayData}</div> */}
      {/* <MModal></MModal> */}
      {/* <button onClick={dateChanger}> Change date</button> */}
    </div>
  );
}
