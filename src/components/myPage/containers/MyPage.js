import React, { useState } from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import ImageUpload from "../components/ImageUpload";
import UserInformation from "../components/UserInformation";

const MyPage = () => {
  const [imagePath, setImagePath] = useState("defaultImage.png");
  const [imageWidth, setImageWidth] = useState(200);
  const [imageHeight, setImageHeight] = useState(200);
  const [altMessage, setAltMessage] = useState("사진을 등록해 주세요");

  const [id, setId] = useState("test1234");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
  const onChangeName = (e) => {
    console.log("onChangeName");
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    console.log("onChangeEmail");
    setEmail(e.target.value);
  };
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div>
      <div style={{ width: "95%" }}>
        <div
          style={{
            width: "47%",
            float: "left",
            textAlign: "right",
            padding: "20px",
          }}
        >
          <Image
            path={require("./" + imagePath)}
            width={imageWidth}
            height={imageHeight}
            alt={altMessage}
          />
          <ImageUpload
            imageWidth={imageWidth}
            onClickImageUpload={onClickImageUpload}
            onClickImageRemove={onClickImageRemove}
          />
        </div>
        <div
          style={{
            width: "47%",
            float: "left",
            textAlign: "left",
            padding: "20px",
          }}
        >
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
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "75%", textAlign: "right" }}>
          <Footer buttonName="저장" onClickSave={onClickSave} />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
