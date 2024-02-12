import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import { useNavigate } from "react-router-dom";
import "./FilterSearch.css";

const FilterSearch = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  return (
    <div className="filter-search">
      <GroupComponent />
      <div className="rectangle-parent2" onClick={onGroupContainer1Click}>
        <div className="group-child4" />
        <div className="filter2">Filter</div>
      </div>
    </div>
  );
};

export default FilterSearch;
