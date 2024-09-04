import { useState } from "react";
import useUserStore from "../store/userStore";
import UserTable from "./UserTable";
import Search from "./Search";
import { useForm } from "react-hook-form";
import Pagination from "./Pagination";

const UserList = () => {
  const { users, updateUser, deleteUser } = useUserStore((state) => ({
    users: state.users,
    updateUser: state.updateUser,
    deleteUser: state.deleteUser,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "username",
    direction: "ascending",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 페이지네이션 관련 로직
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditClick = (user) => {
    if (editingUserId === user.email) {
      setEditingUserId(null);
      reset(); // reset the form when cancelling edit
    } else {
      setEditingUserId(user.email);
      Object.keys(user).forEach((key) => setValue(key, user[key]));
    }
  };

  const handleSaveClick = handleSubmit((data) => {
    // 유효성 검사 통과 확인
    if (!isValid) {
      return;
    }

    // 이메일 중복 체크
    const isEmailTaken = users.some(
      (user) => user.email === data.email && user.email !== editingUserId
    );

    if (isEmailTaken) {
      alert("이미 등록된 이메일이 존재합니다.");
      return;
    }

    // 유효성 검사 통과 후 데이터 업데이트
    updateUser(data, editingUserId);
    setEditingUserId(null); // 수정 완료 후 수정 모드 해제
  });

  const handleDeleteClick = () => {
    deleteUser(editingUserId);
    setEditingUserId(null);
  };

  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">{filteredUsers.length} users</p>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable
        users={currentUsers}
        editingUserId={editingUserId}
        onEditClick={handleEditClick}
        onSaveClick={handleSaveClick}
        onDeleteClick={handleDeleteClick}
        register={register}
        errors={errors}
        onSort={handleSort}
        sortConfig={sortConfig}
        isValid={isValid}
      />
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
