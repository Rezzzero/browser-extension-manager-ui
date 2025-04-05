import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 flex items-center justify-between p-4 rounded-2xl mb-14">
      <img
        src={
          theme === "light" ? "/images/logo.svg" : "/images/logo-for-dark.svg"
        }
        alt="main-logo"
      />
      <button
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl"
      >
        <img
          src={
            theme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"
          }
          alt="theme-toggle-icon"
        />
      </button>
    </div>
  );
};
