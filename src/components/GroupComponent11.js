import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent11.css";

const GroupComponent1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/map-view");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  return (
    <section className="group-section">
      <div className="group-child36" />
      <div className="group-parent8">
        <div className="rectangle-parent37" onClick={onGroupContainerClick}>
          <div className="group-child37" />
          <div className="map-view1">Map View</div>
          <img
            className="vuesaxoutlinemap-icon1"
            alt=""
            src="/vuesaxoutlinemap@2x.png"
          />
        </div>
        <div className="rectangle-parent38" onClick={onGroupContainer1Click}>
          <div className="group-child38" />
          <div className="rent3">Rent</div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
