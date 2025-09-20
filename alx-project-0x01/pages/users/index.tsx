import React from 'react';
import { UserProps } from '@/interfaces/index';
import UserCard from '@/components/common/UserCard';

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900 mt-10">Users Page</h1>
      <p className="mt-2 text-lg text-gray-600">Discover all our amazing users.</p>
      <div className="flex flex-wrap justify-center mt-10">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
