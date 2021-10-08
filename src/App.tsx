import { useRecoilState } from 'recoil';
import { userState } from './atoms/user';
import InputName from './InputNameComponent';

const App = () => {
  const [user] = useRecoilState(userState);

  return (
    <div>
      You are { user.isLoggedIn ? user.name : 'guest' }.
      {
        user.isLoggedIn ? null : <InputName />
      }
    </div>
  );
}

export default App;