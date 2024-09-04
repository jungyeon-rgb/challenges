import FormField from "./FormField";

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
}) => {
  return (
    <table className="min-w-full bg-white border mt-6">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left font-medium text-gray-600">
            Select
          </th>
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
            <td className="px-4 py-2">
              <input
                type="checkbox"
                checked={editingUserId === user.email}
                onChange={() => onEditClick(user)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </td>
            {editingUserId === user.email ? (
              <>
                <td className="px-4 py-2">
                  <FormField
                    id="username"
                    type="text"
                    register={register}
                    required
                    validation={{
                      pattern: {
                        value: /^[가-힣a-zA-Z\s\d]{3,15}$/,
                      },
                    }}
                    errors={errors}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2">
                  <FormField
                    id="email"
                    type="email"
                    register={register}
                    required
                    validation={{
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      },
                    }}
                    errors={errors}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2">
                  <FormField
                    id="nickname"
                    type="text"
                    register={register}
                    required
                    validation={{
                      pattern: {
                        value: /^[가-힣a-zA-Z\s\d]{3,15}$/,
                      },
                    }}
                    errors={errors}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2">
                  <FormField
                    id="gender"
                    type="select"
                    register={register}
                    required
                    errors={errors}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    onClick={onSaveClick}
                    className={`w-24 py-2 px-4 rounded focus:outline-none font-bold transition duration-300 ${
                      isValid
                        ? "bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 text-white cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!isValid}
                  >
                    추가
                  </button>
                  <button
                    onClick={onDeleteClick}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                  >
                    삭제
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.nickname}</td>
                <td className="px-4 py-2">{user.gender}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
