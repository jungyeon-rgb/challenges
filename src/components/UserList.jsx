import { useState } from "react";
import useUserStore from "../store/userStore";
import UserTable from "./UserTable";
import Search from "./Search";
import Pagination from "./Pagination";

const UserList = () => {
  const { users } = useUserStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-xl font-bold">Users</h2>
      <p className="text-sm text-gray-600">{filteredUsers.length} users</p>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserList;
