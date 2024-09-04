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
    <table>
      <thead>
        <tr>
          <th></th>
          <th>username</th>
          <th>email</th>
          <th>nickname</th>
          <th>gender</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>
              <input
                type="checkbox"
                checked={editingUserId === user.email}
                onChange={() => onEditClick(user)}
              />
            </td>
            {editingUserId === user.email ? (
              <>
                <td>
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
                <td>
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
                <td>
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
                <td>
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
                <td>
                  <button
                    onClick={onSaveClick}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={onDeleteClick}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.nickname}</td>
                <td>{user.gender}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
