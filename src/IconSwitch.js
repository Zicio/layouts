function IconSwitch(props) {
  const { icon, onSwitch } = props;
  const onClickSwitch = () => onSwitch();
  return (
    <span className="layouts__icon material-icons" onClick={onClickSwitch}>
      {icon}
    </span>
  );
}

export default IconSwitch;
