const ImageUpload = ({ onClickImageUpload, onClickImageRemove }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={onClickImageUpload}>프로필 사진 업로드</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={onClickImageRemove}>프로필 사진 제거</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImageUpload;
