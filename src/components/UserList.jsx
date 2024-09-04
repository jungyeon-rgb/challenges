import { useState } from "react";
import useUserStore from "../store/userStore";
import UserTable from "./UserTable";
import Search from "./Search";
import { useForm } from "react-hook-form";

const UserList = () => {
  const { users, updateUser, deleteUser } = useUserStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (user) => {
    if (editingUserId === user.email) {
      setEditingUserId(null);
      setEditedUserData({});
    } else {
      setEditingUserId(user.email);
      setEditedUserData(user);
      Object.keys(user).forEach((key) => setValue(key, user[key]));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleSaveClick = handleSubmit(() => {
    const isEmailTaken = users.some(
      (user) =>
        user.email === editedUserData.email && user.email !== editingUserId
    );

    if (isEmailTaken) {
      alert("이미 등록된 이메일이 존재합니다.");
      return;
    }

    if (Object.keys(errors).length === 0) {
      updateUser(editedUserData);
      setEditingUserId(null);
    }
  });

  const handleDeleteClick = () => {
    deleteUser(editingUserId);
    setEditingUserId(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Users</h2>
      <p className="text-sm text-gray-600">{filteredUsers.length} users</p>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable
        users={filteredUsers}
        editingUserId={editingUserId}
        onEditClick={handleEditClick}
        onInputChange={handleInputChange}
        onSaveClick={handleSaveClick}
        onDeleteClick={handleDeleteClick}
        editedUserData={editedUserData}
        errors={errors}
        register={register}
      />
    </div>
  );
};

export default UserList;
