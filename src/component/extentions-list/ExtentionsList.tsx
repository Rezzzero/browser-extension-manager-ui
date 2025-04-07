import { useState } from "react";
import { Button } from "../button/Button";
import data from "../../data.json";
import { Card } from "../extention-card/Card";

export const ExtentionsList = () => {
  const [filter, setFilter] = useState<string>("All");
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
      const newData = data.map((item) => item);
      setFilteredData(newData);
    }

    if (filter === "Active") {
      const newData = data.filter((item) => item.isActive);
      setFilteredData(newData);
    }

    if (filter === "Inactive") {
      const newData = data.filter((item) => !item.isActive);
      setFilteredData(newData);
    }
  };

  const handleRemove = (name: string) => {
    const newData = data.filter((item) => item.name !== name);
    setFilteredData(newData);
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
          return <Card key={item.name} data={item} remove={handleRemove} />;
        })}
      </div>
    </div>
  );
};
