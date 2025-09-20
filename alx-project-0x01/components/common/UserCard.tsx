import React from 'react';
import { UserProps } from '@/interfaces/index';


const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 m-4 w-full md:w-1/3 transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-md text-blue-500 font-semibold mt-1">@{user.username}</p>
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p><strong>Company:</strong> {user.company.name}</p>
        <p>&ldquo;{user.company.catchPhrase}&rdquo;</p>
      </div>
    </div>
  );
};

export default UserCard;