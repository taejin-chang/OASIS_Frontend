const Footer = ({ onClickSave }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={onClickSave}>저장</button>
    </div>
  );
};

export default Footer;
