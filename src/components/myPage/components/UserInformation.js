const UserInformation = ({
  id,
  name,
  email,
  department,
  authority,
  birthday,
  onClickCalendar,
  onChangeName,
  onChangeEmail,
}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <label>아이디</label>
            </td>
            <td>
              <label>{id}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>이름</label>
            </td>
            <td>
              <input type="text" value={name} onChange={onChangeName}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>이메일</label>
            </td>
            <td>
              <input type="text" value={email} onChange={onChangeEmail}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>소속</label>
            </td>
            <td>
              <label>{department}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>권한</label>
            </td>
            <td>
              <label>{authority}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>생일</label>
            </td>
            <td>
              <button onClick={onClickCalendar}>달력</button>
              <label>{birthday}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInformation;
