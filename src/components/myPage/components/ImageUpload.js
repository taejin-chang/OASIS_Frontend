import { Button } from "@mui/material";

const ImageUpload = ({
  imageWidth,
  onClickImageUpload,
  onClickImageRemove,
}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={{ width: imageWidth }}>
              <Button
                variant="contained"
                fullWidth={true}
                onClick={onClickImageUpload}
              >
                프로필 사진 업로드
              </Button>
            </td>
          </tr>
          <tr>
            <td style={{ width: imageWidth }}>
              <Button
                variant="outlined"
                color="error"
                fullWidth={true}
                onClick={onClickImageRemove}
              >
                프로필 사진 제거
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImageUpload;
