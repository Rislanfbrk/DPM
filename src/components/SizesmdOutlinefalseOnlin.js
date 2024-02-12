import "./SizesmdOutlinefalseOnlin.css";

const SizesmdOutlinefalseOnlin = ({ avatar, showAvatarIcon }) => {
  return (
    <div className="sizesmd-outlinefalse-onlin">
      {showAvatarIcon && <img className="avatar-icon1" alt="" src={avatar} />}
    </div>
  );
};

export default SizesmdOutlinefalseOnlin;
