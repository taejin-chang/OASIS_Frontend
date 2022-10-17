import React, { useState } from "react";
import Save from "../../common/presentation/Save";
import Image from "../presentation/Image";
import ImageUpload from "../presentation/ImageUpload";
import UserInformation from "../presentation/UserInformation";
import { Divider, Typography } from "@mui/material";

const MyPage = () => {
  const [data, setData] = useState({
    imagePath: "upload.png",
    imageWidth: 200,
    imageHeight: 200,
    altMessage: "사진을 등록해 주세요",

    id: "가운데 정렬이 너무 어렵다...",
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
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ fontFamily: "Kakao" }}
      >
        내 정보
      </Typography>
      <Divider />
      <div style={{ width: "100%", float: "left" }}>
        <div style={{ float: "left", margin: "2em" }}>
          <Image
            path={require("../../../assets/image/" + imagePath)}
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
        <div style={{ width: "300px", float: "left", margin: "2em" }}>
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
      <div style={{ textAlign: "right" }}>
        <Save buttonName="저장" onClickSave={onClickSave} />
      </div>
    </div>
  );
};

export default MyPage;
