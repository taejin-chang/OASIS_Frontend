import { Button } from "@mui/material";

const Save = ({ buttonName, onClickSave }) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={onClickSave}
        style={{ backgroundColor: "#73aa24" }}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default Save;
