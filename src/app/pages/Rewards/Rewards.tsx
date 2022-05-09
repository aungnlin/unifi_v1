import RewardsBalance from "./RewardsBalance/RewardsBalance";
import styleRewards from "./Rewards.module.css";
import CCard from "../../components/UI/CCard";

export default function Rewards() {
  return (
    <div>
      <CCard>
        <RewardsBalance />
        <p style={{ margin: "0px", fontSize: "0.75rem" }}>
          Total Rewards points
        </p>
      </CCard>

      <CCard>
        <h1
          style={{
            marginBottom: "0px",
            paddingTop: "5px",
            paddingBottom: "0px",
            color: "#ff9f30",
            fontSize: "2rem",
          }}
        >
          Earn Rewards
        </h1>
        {/* Local Offers  */}
        <div>
          <h3>Local Offers</h3>
          <div className={styleRewards.container}>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
          </div>
        </div>
        {/* Financial Literacy */}
        <div>
          <h3>Financial Literacy</h3>
          <div className={styleRewards.container}>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
          </div>
        </div>
        {/* Rewards System */}
        <div>
          <h3>Cards Rewards System</h3>
          <div className={styleRewards.container}>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
            <div className={styleRewards.containerItem}>
              <h3>Offer</h3>
              <p>Details of Offer</p>
            </div>
          </div>
        </div>
      </CCard>

      {/* REDEEM REWARDS */}
      <CCard>
        <div>
          <h1
            style={{
              marginBottom: "0px",
              paddingTop: "5px",
              paddingBottom: "0px",
              color: "#ff9f30",
              fontSize: "2rem",
            }}
          >
            Redeeming Rewards
          </h1>
          <div>
            <div>Offer 1</div>
            <div>Offer 2</div>
            <div>Offer 3</div>
          </div>
        </div>
        <div>
          <h3>Save Reward Points and Earn More!</h3>
          <div>
            <div>Offer 1</div>
            <div>Offer 2</div>
            <div>Offer 3</div>
          </div>
        </div>
      </CCard>
    </div>
  );
}
