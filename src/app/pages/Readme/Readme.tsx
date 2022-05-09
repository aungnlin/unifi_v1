import CCard from "../../components/UI/CCard";
import styles from "./Readme.module.css";

export default function Readme() {
  return (
    <div>
      <CCard>
        <div className={styles.container}>
          <h3 style={{ color: "#009688" }}>Quick Intro:</h3>
          <p>
            In this example,
            <b style={{ color: "#009688" }}>
              you are a college student with $5200 in the bank account.
            </b>
            It's the month of August, and you are trying to set a budget to last
            till the end of December.
          </p>
          <p>
            In the <b>Home</b> page, you will see a set of tools to help you
            determine how much you can afford to spend per month, along with a
            credit limit for your credit card that adjusts to your targeted
            monthly spend, so that you stay on budget
          </p>
          <p>
            In the <b>Spend</b> page, you will see how much you have spent as
            well as the ability to "virtually" swipe the card and create
            transactions to see how your balances and budget get updated live!
          </p>
          <p>And that's all there is to it! Let us know what you think!</p>
        </div>
      </CCard>
    </div>
  );
}
