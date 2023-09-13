import Button from "../../components/Button";
import React, { useState } from "react";

const filters = ["all", "completed", "active"];

interface FiltersProps {
  onChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const [activeFilter, setFilter] = useState(filters[0]);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    onChange(filter);
  };

  const isFilterActive = (filter: string) => filter === activeFilter;

  return (
    <div className="d-flex justify-content-between">
      {filters.map((filter, i) => {
        return (
          <div key={i}>
            <Button
              onClick={() => {
                handleFilterChange(filter);
                return Promise.resolve();
              }}
              className={isFilterActive(filter) ? "btn-primary" : "btn-light"}
            >
              {filter}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
