import "./Card.css";
interface ChildProps {
  className: string;
  children: any;
}

const CCard: React.FC<ChildProps> = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default CCard;
