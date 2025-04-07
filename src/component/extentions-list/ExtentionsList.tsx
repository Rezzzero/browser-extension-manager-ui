import { useState } from "react";
import { Button } from "../button/Button";
import data from "../../data.json";
import { Card } from "../extention-card/Card";

export const ExtentionsList = () => {
  const [filter, setFilter] = useState<string>("All");
  const [initialData, setInitialData] = useState(
    data as {
      logo: string;
      name: string;
      description: string;
      isActive: boolean;
    }[]
  );

  const [filteredData, setFilteredData] = useState(
    data as {
      logo: string;
      name: string;
      description: string;
      isActive: boolean;
    }[]
  );
  const handleFilterChange = (filter: string) => {
    setFilter(filter);

    if (filter === "All") {
      const newData = initialData.map((item) => item);
      setFilteredData(newData);
    }

    if (filter === "Active") {
      const newData = initialData.filter((item) => item.isActive);
      setFilteredData(newData);
    }

    if (filter === "Inactive") {
      const newData = initialData.filter((item) => !item.isActive);
      setFilteredData(newData);
    }
  };

  const handleChangeIsActive = (name: string) => {
    const newData = initialData.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
    setInitialData(newData);
  };

  const handleRemove = (name: string) => {
    const newData = initialData.filter((item) => item.name !== name);
    setInitialData(newData);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-5 md:gap-0 md:flex-row md:justify-between md:items-start mb-5">
        <p className="font-bold text-3xl dark:text-white">Extentions List</p>
        <div className="flex gap-3">
          <Button selected={filter === "All"} changeFilter={handleFilterChange}>
            All
          </Button>
          <Button
            selected={filter === "Active"}
            changeFilter={handleFilterChange}
          >
            Active
          </Button>
          <Button
            selected={filter === "Inactive"}
            changeFilter={handleFilterChange}
          >
            Inactive
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredData.map((item) => {
          return (
            <Card
              key={item.name}
              data={item}
              changeIsActive={handleChangeIsActive}
              remove={handleRemove}
            />
          );
        })}
      </div>
    </div>
  );
};
