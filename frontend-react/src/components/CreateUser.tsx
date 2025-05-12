import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../GraphQL/Mutations';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
  password: string;
}

const Users = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [ipAddress, setIpAddress] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [newUser, setNewUser] = useState<any>();

  const [createUser, { error }] = useMutation(CREATE_USER);

  const addUser = () => {
    createUser({
      variables: {
        firstName,
        lastName,
        email,
        gender,
        ipAddress,
        password,
      },
    });

    setNewUser({
      id: 1,
      firstName,
      lastName,
      email,
      gender,
      ipAddress,
      password,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Create User</h2>
      <div>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="IP Address"
          onChange={(e) => setIpAddress(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addUser}>Submit</button>
      </div>
      {newUser && newUser.firstName}
    </>
  );
};

export default Users;
