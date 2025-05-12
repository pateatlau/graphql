import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
  password: string;
}

const GetUsers = () => {
  const { data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    if (data) {
      const myUsers = data.getAllUsers;
      console.log(myUsers);
      setUsers(myUsers);
    }
  }, [data]);

  return (
    <>
      <h2>Users</h2>
      <div
        style={{
          border: '1px solid #333',
          maxHeight: 'calc(100vh - 100px)',
          width: '500px',
          padding: '0 40px 0 0',
          overflow: 'auto',
        }}
      >
        {users &&
          users.map((user) => {
            return (
              <div
                style={{
                  border: '1px solid #333',
                  color: '#666',
                  padding: '10px',
                  width: '100%',
                }}
                key={user.id}
              >
                {user.firstName} {user.lastName}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GetUsers;
