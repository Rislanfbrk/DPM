import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent21.css";

const GroupComponent2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/map-view");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  return (
    <section className="rectangle-parent39">
      <div className="group-child39" />
      <div className="group-parent9">
        <div className="rectangle-parent40" onClick={onGroupContainerClick}>
          <div className="group-child40" />
          <div className="map-view2">Map View</div>
          <img
            className="vuesaxoutlinemap-icon2"
            alt=""
            src="/vuesaxoutlinemap@2x.png"
          />
        </div>
        <button className="rectangle-parent41" onClick={onGroupButton1Click}>
          <div className="group-child41" />
          <div className="rent4">Rent</div>
        </button>
      </div>
    </section>
  );
};

export default GroupComponent2;
