import type { NextPage } from 'next';
import { User } from '../src/modules';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserPage: NextPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    axios
      .get<User[]>('http://localhost:3000/api/users')
      .then(({data}) => setUsers(data));
  }, []);
  const user = users ? users[0] : {};
  return <h1>Hi,{`${user?.name || ''}`}.</h1>;
};

export default UserPage;
