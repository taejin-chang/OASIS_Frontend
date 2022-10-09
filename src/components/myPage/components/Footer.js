import { Button } from "@mui/material";

const Footer = ({ buttonName, onClickSave }) => {
  return (
    <div>
      <Button variant="contained" onClick={onClickSave}>
        {buttonName}
      </Button>
    </div>
  );
};

export default Footer;
