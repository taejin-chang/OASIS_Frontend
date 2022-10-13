import SignIn from "./components/login/presentation/Signin";
import MyPage from "./components/myPage/containers/MyPage";
import ChangePassword from "./components/changePassword/containers/ChangePassword";
import EnvironmentConfiguration from "./components/configuration/containers/EnvironmentConfiguration";

function App() {
  return (
    <div>
      {/*<SignIn />*/}
      {/* <div>
        <MyPage />
      </div> */}
      {/* <div>
        <ChangePassword />
      </div> */}
      <div>
        <EnvironmentConfiguration />
      </div>
    </div>
  );
}

export default App;
