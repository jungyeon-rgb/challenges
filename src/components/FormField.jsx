const FormField = ({
  label,
  id,
  type = "text",
  register,
  required,
  errors,
  validation,
  options = [],
  hideLabel = false,
}) => {
  return (
    <div className="flex-1">
      {!hideLabel && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {type === "select" ? (
        <select
          id={id}
          {...register(id, { required })}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors[id] && errors[id].type !== "required"
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          {...register(id, { required, ...validation })}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors[id] && errors[id].type !== "required"
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
      )}
      {errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

export default FormField;
