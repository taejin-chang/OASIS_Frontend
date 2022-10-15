import SignIn from "./components/login/presentation/Signin";
import MyPage from "./components/myPage/containers/MyPage";
import ChangePassword from "./components/changePassword/containers/ChangePassword";
import EnvironmentConfiguration from "./components/configuration/containers/EnvironmentConfiguration";
import UserConfiguration from "./components/configuration/containers/UserConfiguration";

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
      {/* <div>
        <UserConfiguration />
      </div> */}
    </div>
  );
}

export default App;
