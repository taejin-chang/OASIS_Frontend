import { TextField } from "@mui/material";

const InputItem = ({ itemName, placeholder, disabled, value }) => {
  return (
    <div>
      <div
        style={{
          width: "150px",
          padding: "13px 0",
          float: "left",
          fontFamily: "Kakao",
        }}
      >
        <label>{itemName}</label>
      </div>
      <div>
        <TextField
          fullWidth
          margin="dense"
          size="small"
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ width: "80%" }}
        />
      </div>
    </div>
  );
};

export default InputItem;
