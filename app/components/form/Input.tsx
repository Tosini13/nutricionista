const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <div>
      <input
        {...props}
        className="w-full rounded-xl bg-gray-200 px-4 py-3 text-lg focus:outline-none" //placeholder:text-slate-400
      />
    </div>
  );
};

export default Input;
