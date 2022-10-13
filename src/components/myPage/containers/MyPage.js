import React, { useState } from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import ImageUpload from "../components/ImageUpload";
import UserInformation from "../components/UserInformation";

const MyPage = () => {
  const [data, setData] = useState({
    imagePath: "defaultImage.png",
    imageWidth: 200,
    imageHeight: 200,
    altMessage: "사진을 등록해 주세요",

    id: "test1234",
    name: "",
    email: "",
    department: "isign team 2",
    authority: "일반 사용자",
    birthday: "1990.08.17",
  });

  const {
    imagePath,
    imageWidth,
    imageHeight,
    altMessage,
    id,
    name,
    email,
    department,
    authority,
    birthday,
  } = data;

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
    setData({ name: e.target.value });
  };
  const onChangeEmail = (e) => {
    console.log("onChangeEmail");
    setData({ email: e.target.value });
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
