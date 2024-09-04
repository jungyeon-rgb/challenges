import React, { useState } from 'react';
import useUserStore from '../store/userStore';
import UserTable from './UserTable';
import Search from './Search';

const UserList = () => {
  const { users } = useUserStore();
  const [searchTerm, setSearchTerm] = useState('');

  // 검색된 사용자 목록 필터링
  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default UserList;
