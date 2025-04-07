import { useState } from "react";
import { Button } from "../button/Button";
import data from "../../data.json";
import { Card } from "../extention-card/Card";

export const ExtentionsList = () => {
  const [filter, setFilter] = useState<string>("All");

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div>
      <div className="flex justify-between items-start mb-5">
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
        {data.map((item) => {
          return <Card key={item.name} data={item} />;
        })}
      </div>
    </div>
  );
};
