import { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({
  data,
  remove: handleRemove,
  changeIsActive: handleChangeIsActive,
}: {
  data: { logo: string; name: string; description: string; isActive: boolean };
  remove: (name: string) => void;
  changeIsActive: (name: string) => void;
}) => {
  const [toggled, setToggled] = useState(data.isActive);

  return (
    <div className="flex flex-col justify-between gap-5 md:gap-0 lg:h-[190px] shadow-sm bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-4 rounded-2xl">
      <div className="flex items-start gap-5">
        <img src={data.logo} alt={data.name} />
        <div>
          <h1 className="font-bold text-lg">{data.name}</h1>
          <p className="text-gray-500">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => handleRemove(data.name)}
          className="font-semibold cursor-pointer hover:bg-red-700 hover:text-white dark:bg-gray-800 dark:hover:bg-red-400 dark:hover:text-black border border-gray-300 dark:border-gray-600 dark:text-white px-3 py-1 rounded-full"
        >
          Remove
        </button>
        <button
          onClick={() => {
            handleChangeIsActive(data.name);
            setToggled(!toggled);
          }}
          className={`${styles.toggleBtn} ${toggled ? styles.toggled : ""}`}
        >
          <div className={styles.thumb}></div>
        </button>
      </div>
    </div>
  );
};
