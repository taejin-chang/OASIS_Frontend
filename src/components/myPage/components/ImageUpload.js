const ImageUpload = ({ onClickImageUpload, onClickImageRemove }) => {
  return (
    <div>
      <button onClick={onClickImageUpload}>프로필 사진 업로드</button>
      <br />
      <button onClick={onClickImageRemove}>프로필 사진 제거</button>
    </div>
  );
};

export default ImageUpload;
