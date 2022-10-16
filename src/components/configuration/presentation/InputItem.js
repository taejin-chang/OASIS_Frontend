import { TextField } from "@mui/material";

const InputItem = ({ itemName, placeholder, disabled }) => {
  return (
    <div>
      <div
        style={{
          width: "10%",
          padding: "15px 0",
          float: "left",
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
