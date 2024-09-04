import { useState } from "react";

const UserTable = ({ users }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "username",
    direction: "ascending",
  });

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort("username")}>username</th>
          <th onClick={() => requestSort("email")}>email</th>
          <th onClick={() => requestSort("nickname")}>nickname</th>
          <th onClick={() => requestSort("gender")}>gender</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.nickname}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
