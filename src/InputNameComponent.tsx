import { ChangeEvent, FormEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from './atoms/user';

const InputName = () => {
  const [user, setUser] = useRecoilState(userState);

  const [name, setName] = useState('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser({
      ...user,
      isLoggedIn: true,
      name,
    });
    setName('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        My name is <input type="text" value={name} onChange={onChangeName} /> 
        <button>Submit</button>
      </form>
    </div>
  );
}

export default InputName;