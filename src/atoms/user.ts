import { atom, RecoilState } from "recoil";

interface UserState {
    isLoggedIn: boolean;
    name: string | null;
}

const userStateDefault: UserState = {
  isLoggedIn: false,
  name: null,
};

export const userState: RecoilState<UserState> = atom({
  key: 'userState',
  default: userStateDefault,
});
