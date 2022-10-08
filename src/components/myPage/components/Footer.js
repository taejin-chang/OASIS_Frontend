import { Button } from "@mui/material";

const Footer = ({ buttonName, onClickSave }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <Button variant="contained" onClick={onClickSave}>
        {buttonName}
      </Button>
    </div>
  );
};

export default Footer;
