import { Button } from "@mui/material";

const Save = ({ buttonName, onClickSave }) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={onClickSave}
        style={{ backgroundColor: "#c2e66d" }}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default Save;
