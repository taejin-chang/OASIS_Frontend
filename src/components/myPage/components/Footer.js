const Footer = ({ buttonName, onClickSave }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={onClickSave}>{buttonName}</button>
    </div>
  );
};

export default Footer;
