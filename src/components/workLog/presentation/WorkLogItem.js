import { AutoFixNormal, DeleteForever } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

const WorkLogItem = ({
  date,
  contents,
  isModify,
  handleClickModification,
  handleClickRemoval,
  handleChangeWorkLog,
}) => {
  return (
    <div>
      <div
        style={{
          height: "160px",
          border: "1px solid #bb9167",
          margin: "1rem",
          borderRadius: "0.3rem",
        }}
      >
        <div>
          <h4 style={{ margin: "1rem", fontFamily: "Kakao" }}>
            {date}
            <IconButton
              style={{ color: "#ff0000", float: "right" }}
              onClick={handleClickRemoval}
            >
              <DeleteForever />
            </IconButton>
            <IconButton
              style={{ color: "#486a16", float: "right" }}
              onClick={handleClickModification}
            >
              <AutoFixNormal />
            </IconButton>
          </h4>
        </div>
        {contents &&
          contents.map((content, index) => (
            <div key={index}>
              {isModify ? (
                <TextField
                  fullWidth
                  size="small"
                  style={{ float: "left", borderColor: "1px solid #ffffff" }}
                  value={content}
                  onChange={handleChangeWorkLog}
                ></TextField>
              ) : (
                <p
                  style={{
                    fontSize: "17px",
                    margin: "1rem",
                    fontFamily: "Kakao",
                  }}
                >
                  · {content}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkLogItem;
