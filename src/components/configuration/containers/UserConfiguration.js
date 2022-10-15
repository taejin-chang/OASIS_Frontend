import CommonConfiguration from "../presentation/CommonConfiguration";
import Save from "../../common/presentation/Save";

const UserConfiguration = () => {
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div style={{ width: "800px" }}>
      <div style={{ width: "80%", margin: "1em" }}>
        <CommonConfiguration />
      </div>
      <div style={{ textAlign: "right" }}>
        <Save buttonName="저장" onClickSave={onClickSave} />
      </div>
    </div>
  );
};

export default UserConfiguration;
