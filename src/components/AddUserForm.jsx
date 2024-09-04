import React from "react";
import { useForm } from "react-hook-form";
import useUserStore from "../store/userStore";

const AddUserForm = () => {
  const addUser = useUserStore((state) => state.addUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    addUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex space-x-4">
        {/* Username Field */}
        <div className="flex-1">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: true,
              minLength: 3,
              maxLength: 15,
              pattern: /^[가-힣a-zA-Z\s\d]{3,15}$/,
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="nickname"
            className="block text-sm font-medium text-gray-700"
          >
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            {...register("nickname", {
              required: true,
              minLength: 3,
              maxLength: 15,
              pattern: /^[가-힣a-zA-Z\s\d]{3,15}$/,
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.nickname ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            {...register("gender", {
              required: true,
            })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.gender ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className={`w-24 py-2 px-4 rounded focus:outline-none font-bold transition duration-300 ${
            isValid
              ? "bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
