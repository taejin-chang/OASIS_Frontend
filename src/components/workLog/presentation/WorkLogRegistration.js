import { CalendarMonth, AddCircle, FileDownload } from "@mui/icons-material";
import { Button, TextField, IconButton } from "@mui/material";

const WorkLogRegistration = ({
  workDate,
  handleClickCalendar,
  handleClickAddition,
  handleClickInquiry,
  handleClickRegistration,
  handleClickExportFile,
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
        <div style={{ margin: "0.5rem" }}>
          <Button
            startIcon={
              <CalendarMonth
                style={{ color: "#73aa24", fontFamily: "Kakao" }}
              ></CalendarMonth>
            }
            style={{ fontFamily: "Kakao", color: "#613d30" }}
            onClick={handleClickCalendar}
          >
            {workDate}
          </Button>
        </div>
        <div style={{ margin: "0.5rem" }}>
          <TextField
            size="small"
            style={{ width: "910px", float: "left" }}
            placeholder="업무 내용을 입력해 주세요."
          ></TextField>
          <IconButton
            style={{ color: "#c2e66d" }}
            aria-label="upload picture"
            component="label"
            onClick={handleClickAddition}
          >
            <input hidden accept="image/*" type="file" />
            <AddCircle />
          </IconButton>
        </div>
        <div style={{ margin: "0.5rem", width: "98%" }}>
          <Button
            variant="contained"
            startIcon={
              <FileDownload
                style={{ color: "#486a16", fontFamily: "Kakao" }}
              ></FileDownload>
            }
            style={{
              margin: "0.3rem",
              fontFamily: "Kakao",
              color: "#000000",
              backgroundColor: "#c2e66d",
            }}
            onClick={handleClickExportFile}
          >
            파일 내보내기
          </Button>
          <Button
            variant="contained"
            style={{
              margin: "0.3rem",
              fontFamily: "Kakao",
              color: "#000000",
              backgroundColor: "#c2e66d",
              float: "right",
            }}
            onClick={handleClickRegistration}
          >
            등록
          </Button>
          <Button
            variant="contained"
            style={{
              margin: "0.3rem",
              fontFamily: "Kakao",
              color: "#000000",
              backgroundColor: "#c2e66d",
              float: "right",
            }}
            onClick={handleClickInquiry}
          >
            조회
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkLogRegistration;
