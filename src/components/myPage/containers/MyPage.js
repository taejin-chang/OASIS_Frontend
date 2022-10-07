import Image from "../components/Image";
import ImageUpload from "../components/ImageUpload";

const MyPage = () => {
  const onClickImageUpload = () => {};

  const onClickImageRemove = () => {};

  return (
    <div>
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
    </div>
  );
};

export default MyPage;
