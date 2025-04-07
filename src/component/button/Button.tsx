export const Button = ({
  children,
  selected,
  changeFilter,
}: {
  children: React.ReactNode;
  selected: boolean;
  changeFilter: (filter: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => changeFilter(children?.toString() || "")}
      className={`px-5 py-2 text-xl font-semibold rounded-full cursor-pointer ${
        selected
          ? "bg-red-700 dark:bg-red-400 text-white dark:text-black hover:bg-red-600 hover:dark:bg-red-500"
          : "bg-white dark:bg-gray-700 dark:text-white dark:border dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      {children}
    </button>
  );
};
