import "./CCard.css";

interface ChildProps {
  className?: string;
  children?: any;
}

const CCard: React.FC<ChildProps> = ({ className, children }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default CCard;
