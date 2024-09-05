import { EditRow, ViewRow } from "./UserTableRows";

const UserTable = ({
  users,
  editingUserId,
  onEditClick,
  onSaveClick,
  onDeleteClick,
  errors,
  register,
  onSort,
  sortConfig,
  isValid,
}) => (
  <table className="min-w-full bg-white border my-6">
    <thead>
      <tr>
        <th className="px-4 py-2 text-left font-medium text-gray-600">Select</th>
        <th
          className="px-4 py-2 text-left font-medium text-gray-600 cursor-pointer"
          onClick={() => onSort("username")}
        >
          Username{" "}
          {sortConfig.key === "username"
            ? sortConfig.direction === "ascending"
              ? "↑"
              : "↓"
            : ""}
        </th>
        <th
          className="px-4 py-2 text-left font-medium text-gray-600 cursor-pointer"
          onClick={() => onSort("email")}
        >
          Email{" "}
          {sortConfig.key === "email"
            ? sortConfig.direction === "ascending"
              ? "↑"
              : "↓"
            : ""}
        </th>
        <th
          className="px-4 py-2 text-left font-medium text-gray-600 cursor-pointer"
          onClick={() => onSort("nickname")}
        >
          Nickname{" "}
          {sortConfig.key === "nickname"
            ? sortConfig.direction === "ascending"
              ? "↑"
              : "↓"
            : ""}
        </th>
        <th
          className="px-4 py-2 text-left font-medium text-gray-600 cursor-pointer"
          onClick={() => onSort("gender")}
        >
          Gender{" "}
          {sortConfig.key === "gender"
            ? sortConfig.direction === "ascending"
              ? "↑"
              : "↓"
            : ""}
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user) => (
        <tr key={user.email}>
          {editingUserId === user.email ? (
            <EditRow
              user={user}
              register={register}
              errors={errors}
              onSaveClick={onSaveClick}
              onDeleteClick={onDeleteClick}
              onEditClick={onEditClick}
              isValid={isValid}
            />
          ) : (
            <ViewRow user={user} onEditClick={onEditClick} />
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
