import FormField from "./FormField";

const UserTable = ({
  users,
  editingUserId,
  onEditClick,
  onInputChange,
  onSaveClick,
  onDeleteClick,
  editedUserData,
  errors,
  register,
}) => {
  return (
    <table className="min-w-full bg-white border mt-6">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left font-medium text-gray-600">
            Select
          </th>
          <th className="px-4 py-2 text-left font-medium text-gray-600">
            Username
          </th>
          <th className="px-4 py-2 text-left font-medium text-gray-600">
            Email
          </th>
          <th className="px-4 py-2 text-left font-medium text-gray-600">
            Nickname
          </th>
          <th className="px-4 py-2 text-left font-medium text-gray-600">
            Gender
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
                    errors={errors}
                    value={editedUserData.username}
                    onChange={onInputChange}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2">
                  <FormField
                    id="email"
                    type="email"
                    register={register}
                    required
                    errors={errors}
                    value={editedUserData.email}
                    onChange={onInputChange}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2">
                  <FormField
                    id="nickname"
                    type="text"
                    register={register}
                    required
                    errors={errors}
                    value={editedUserData.nickname}
                    onChange={onInputChange}
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
                    value={editedUserData.gender}
                    onChange={onInputChange}
                    hideLabel={true}
                  />
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    onClick={onSaveClick}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={onDeleteClick}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
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
