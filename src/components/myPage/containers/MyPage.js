import React, { useState } from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import ImageUpload from "../components/ImageUpload";
import UserInformation from "../components/UserInformation";

const MyPage = () => {
  const [imagePath, setImagePath] = useState("defaultImage.png");
  const [imageWidth, setImageWidth] = useState("200");
  const [imageHeight, setImageHeight] = useState("200");
  const [altMessage, setAltMessage] = useState("사진을 등록해 주세요");

  const [id, setId] = useState("eeaeeon");
  const [name, setName] = useState("이재연");
  const [email, setEmail] = useState("test.com");
  const [department, setDepartment] = useState("isign team 2");
  const [authority, setAuthority] = useState("일반 사용자");
  const [birthday, setBirthday] = useState("1990.08.17");

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
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <Image
                path={require("./" + imagePath)}
                width={imageWidth}
                height={imageHeight}
                alt={altMessage}
              />
              <ImageUpload
                onClickImageUpload={onClickImageUpload}
                onClickImageRemove={onClickImageRemove}
              />
            </td>
            <td>
              <UserInformation
                id={id}
                name={name}
                email={email}
                department={department}
                authority={authority}
                birthday={birthday}
                onClickCalendar={onClickCalendar}
                onChangeName={onChangeName}
                onChangeEmail={onChangeEmail}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Footer onClickSave={onClickSave} />
    </div>
  );
};

export default MyPage;
