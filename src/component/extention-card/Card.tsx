import { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({
  data,
}: {
  data: { logo: string; name: string; description: string; isActive: boolean };
}) => {
  const [toggled, setToggled] = useState(data.isActive);

  return (
    <div className="flex flex-col justify-between lg:h-[190px] bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-4 rounded-2xl">
      <div className="flex gap-5">
        <img src={data.logo} alt={data.name} />
        <div>
          <h1 className="font-bold text-lg">{data.name}</h1>
          <p className="dark:text-gray-400">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="font-semibold cursor-pointer hover:bg-red-700 hover:text-white dark:bg-gray-800 dark:hover:bg-red-400 dark:hover:text-black border border-gray-300 dark:border-gray-600 dark:text-white px-3 py-1 rounded-full"
        >
          Remove
        </button>
        <button
          onClick={() => setToggled(!toggled)}
          className={`${styles.toggleBtn} ${toggled ? styles.toggled : ""}`}
        >
          <div className={styles.thumb}></div>
        </button>
      </div>
    </div>
  );
};
