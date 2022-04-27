import PropTypes from "prop-types";

function IconSwitch(props) {
  const { icon, onSwitch } = props;
  const onClickSwitch = () => onSwitch();
  return (
    <span className="layouts__icon material-icons" onClick={onClickSwitch}>
      {icon}
    </span>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
