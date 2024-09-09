import FormField from "./FormField";

export const EditRow = ({ user, register, errors, onSaveClick, onDeleteClick, onEditClick, isValid }) => (
  <>
    <td className="px-4 py-2">
      <input
        type="checkbox"
        checked
        onChange={() => onEditClick(null)}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
    </td>
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
        defaultValue={user.username}
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
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        }}
        errors={errors}
        hideLabel={true}
        defaultValue={user.email}      />
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
        defaultValue={user.nickname}
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
        defaultValue={user.gender}
        hideLabel={true}
      />
    </td>
    <td className="px-4 py-2 flex space-x-2">
      <button
        onClick={onSaveClick}
        className={`py-2 px-4 rounded focus:outline-none font-bold transition duration-300 ${
          isValid
            ? "bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 text-white cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-pointer"
        }`}
        disabled={!isValid}
      >
        수정
      </button>
      <button
        onClick={onDeleteClick}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
      >
        삭제
      </button>
    </td>
  </>
);



export const ViewRow = ({ user, onEditClick }) => (
  <>
    <td className="px-4 py-2">
      <input
        type="checkbox"
        onChange={() => onEditClick(user)}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
    </td>
    <td className="px-4 py-2">{user.username}</td>
    <td className="px-4 py-2">{user.email}</td>
    <td className="px-4 py-2">{user.nickname}</td>
    <td className="px-4 py-2">{user.gender}</td>
  </>
);
