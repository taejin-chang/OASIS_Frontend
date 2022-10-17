import { Button } from "@mui/material";

const ImageUpload = ({
  imageWidth,
  onClickImageUpload,
  onClickImageRemove,
}) => {
  return (
    <div>
      <div>
        <Button
          variant="contained"
          style={{
            width: imageWidth,
            backgroundColor: "#613d30",
            fontFamily: "Kakao",
          }}
          onClick={onClickImageUpload}
        >
          프로필 사진 업로드
        </Button>
      </div>
      <div>
        <Button
          variant="outlined"
          color="error"
          style={{
            width: imageWidth,
            borderColor: "#bb9167",
            color: "#bb9167",
            fontFamily: "Kakao",
          }}
          onClick={onClickImageRemove}
        >
          프로필 사진 제거
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
