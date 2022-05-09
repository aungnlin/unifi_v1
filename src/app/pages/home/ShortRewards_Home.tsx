import { useSelector, useDispatch } from "react-redux";
import { selectRewardsBalance } from "../../../services/Rewards/rewardsSlice";
import CCard from "../../components/UI/CCard";

export default function ShortRewards_Home() {
  // const dispatch = useDispatch();
  const RewardsBalance = useSelector(selectRewardsBalance);

  return (
    <CCard>
      <div>
        {/* Top part of the rewards balance */}
        <div style={{ display: "inline-block" }}>
          <h1
            style={{
              marginBottom: "0px",
              marginTop: "4px",
              color: "#ff9f30",
              // textAlign: "left",
              // alignSelf: "left",
            }}
          >
            ⭐️{RewardsBalance}
          </h1>
        </div>
        <div style={{ display: "inline-block", margin: "0.25rem" }}>
          Earn more Rewards
        </div>
      </div>
      {/* Bottom part of the rewards balance */}
      <div>
        <p style={{ textAlign: "left", paddingLeft: "0.5rem" }}>
          What you can get with points
        </p>
        <div style={{ textAlign: "left", paddingLeft: "0.5rem" }}>
          Local Offer{" "}
        </div>
      </div>
    </CCard>
  );
}
