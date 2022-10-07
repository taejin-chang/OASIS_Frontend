import Image from "./Image";

const MyPage = () => {
  return (
    <div>
      <Image
        path={require("./testImage.png")}
        width="200"
        height="200"
        alt="image not found"
      />
    </div>
  );
};

export default MyPage;
