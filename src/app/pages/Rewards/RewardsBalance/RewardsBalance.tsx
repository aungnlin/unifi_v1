import { useSelector, useDispatch } from "react-redux";
import { selectRewardsBalance } from "../../../../services/Rewards/rewardsSlice";

export default function RewardsBalance() {
  const dispatch = useDispatch();
  const RewardsBalance = useSelector(selectRewardsBalance);

  return (
    <div>
      <h1 style={{ marginBottom: "0px", marginTop: "4px", color: "#ff9f30" }}>
        ⭐️{RewardsBalance}
      </h1>
    </div>
  );
}
