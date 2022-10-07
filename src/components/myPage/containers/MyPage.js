import Image from "../components/Image";
import ImageUpload from "../components/ImageUpload";
import UserInformation from "../components/UserInformation";

const MyPage = () => {
  const onClickImageUpload = () => {
    console.log("onClickImageUpload");
  };
  const onClickImageRemove = () => {
    console.log("onClickImageRemove");
  };
  const onClickCalendar = () => {
    console.log("onClickCalendar");
  };
  const onChangeName = () => {
    console.log("onChangeName");
  };
  const onChangeEmail = () => {
    console.log("onChangeEmail");
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Image
                path={require("./defaultImage.png")}
                width="200"
                height="200"
                alt="image not found"
              />
              <ImageUpload
                onClickImageUpload={onClickImageUpload}
                onClickImageRemove={onClickImageRemove}
              />
            </td>
            <td>
              <UserInformation
                id="eeaeeon"
                name="이재연"
                email="test.com"
                department="isign team 2"
                authority="일반사용자"
                birthday="1990.08.17"
                onClickCalendar={onClickCalendar}
                onChangeName={onChangeName}
                onChangeEmail={onChangeEmail}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyPage;
