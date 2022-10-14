import { Button } from "@mui/material";

const Save = ({ buttonName, onClickSave }) => {
  return (
    <div>
      <Button variant="contained" onClick={onClickSave}>
        {buttonName}
      </Button>
    </div>
  );
};

export default Save;
