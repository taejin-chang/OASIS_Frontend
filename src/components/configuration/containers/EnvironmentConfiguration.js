import PageView from "../presentation/PageView";
import Connect from "../presentation/Connect";
import Save from "../../common/presentation/Save";

const EnvironmentConfiguration = () => {
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div style={{ width: "800px" }}>
      <div style={{ width: "80%" }}>
        <PageView />
      </div>
      <div style={{ width: "80%" }}>
        <Connect />
      </div>
      <div style={{ textAlign: "right" }}>
        <Save buttonName="저장" onClickSave={onClickSave} />
      </div>
    </div>
  );
};

export default EnvironmentConfiguration;
