const InputPassword = ({
  currentPassword,
  newPassword,
  confirmPassword,
  onChangeCurrentPassword,
  onChangeNewPassword,
  onChangeConfirmPassword,
}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <label>현재 비밀번호</label>
            </td>
            <td>
              <input
                type="text"
                onChange={onChangeCurrentPassword}
                value={currentPassword}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>새 비밀번호</label>
            </td>
            <td>
              <input
                type="text"
                onChange={onChangeNewPassword}
                value={newPassword}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>새 비밀번호 확인</label>
            </td>
            <td>
              <input
                type="text"
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputPassword;
