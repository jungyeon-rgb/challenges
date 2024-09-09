import { useForm } from "react-hook-form";
import useUserStore from "../store/userStore";
import FormField from "./FormField";

const AddUserForm = () => {
  const { users, addUser } = useUserStore((state) => ({
    users: state.users,
    addUser: state.addUser,
  }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const isEmailTaken = users.some((user) => user.email === data.email);

    if (isEmailTaken) {
      alert("이미 등록된 이메일이 존재합니다.");
      return;
    }

    addUser(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex space-x-4">
        <FormField
          label="Username"
          id="username"
          type="text"
          register={register}
          required
          errors={errors}
          validation={{
            pattern: /^[가-힣a-zA-Z\s\d]{3,15}$/,
          }}
        />

        <FormField
          label="Email"
          id="email"
          type="email"
          register={register}
          required
          errors={errors}
          validation={{
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }}
        />

        <FormField
          label="Nickname"
          id="nickname"
          type="text"
          register={register}
          required
          errors={errors}
          validation={{
            pattern: /^[가-힣a-zA-Z\s\d]{3,15}$/,
          }}
        />

        <FormField
          label="Gender"
          id="gender"
          type="select"
          register={register}
          required
          errors={errors}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className={`w-24 py-2 px-4 rounded focus:outline-none font-bold transition duration-300 ${
            isValid
              ? "bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-pointer"
          }`}
          disabled={!isValid}
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
