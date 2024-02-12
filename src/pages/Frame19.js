import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame19.css";

const Frame19 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login-user");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    // Please sync "Login owner" to the project
  }, []);

  return (
    <div className="get-started-parent">
      <main className="get-started">
        <section className="undraw-buy-house-re-8xq7-1">
          <img className="group-icon" alt="" src="/group.svg" />
          <img className="group-icon1" alt="" src="/group.svg" />
          <img className="vector-icon83" alt="" src="/vector.svg" />
          <img className="vector-icon84" alt="" src="/vector.svg" />
          <img className="vector-icon85" alt="" src="/vector.svg" />
          <img className="vector-icon86" alt="" src="/vector.svg" />
          <img className="b-190-icon" alt="" src="/b190.svg" />
          <img className="vector-icon87" alt="" src="/vector.svg" />
          <img className="vector-icon88" alt="" src="/vector.svg" />
          <img className="group-icon2" alt="" src="/group.svg" />
          <img className="group-icon3" alt="" src="/group.svg" />
          <img className="vector-icon89" alt="" src="/vector.svg" />
          <img className="vector-icon90" alt="" src="/vector.svg" />
          <img className="vector-icon91" alt="" src="/vector.svg" />
          <img className="vector-icon92" alt="" src="/vector.svg" />
          <img className="vector-icon93" alt="" src="/vector.svg" />
          <img className="vector-icon94" alt="" src="/vector.svg" />
          <img className="vector-icon95" alt="" src="/vector.svg" />
          <img className="vector-icon96" alt="" src="/vector.svg" />
          <img className="vector-icon97" alt="" src="/vector.svg" />
          <img className="vector-icon98" alt="" src="/vector.svg" />
          <img className="vector-icon99" alt="" src="/vector.svg" />
          <img className="vector-icon100" alt="" src="/vector.svg" />
          <img className="vector-icon101" alt="" src="/vector.svg" />
          <img className="vector-icon102" alt="" src="/vector.svg" />
          <img className="vector-icon103" alt="" src="/vector.svg" />
          <img className="vector-icon104" alt="" src="/vector.svg" />
          <img className="vector-icon105" alt="" src="/vector.svg" />
          <img className="vector-icon106" alt="" src="/vector.svg" />
          <img className="vector-icon107" alt="" src="/vector.svg" />
          <img className="vector-icon108" alt="" src="/vector.svg" />
          <img className="vector-icon109" alt="" src="/vector.svg" />
          <img className="vector-icon110" alt="" src="/vector.svg" />
          <img className="group-icon4" alt="" src="/group.svg" />
          <img className="c-191-icon" alt="" src="/c191.svg" />
          <img className="vector-icon111" alt="" src="/vector.svg" />
          <img className="group-icon5" alt="" src="/group.svg" />
        </section>
        <section className="welcome-to-bull-container">
          <p className="welcome-to">Welcome to</p>
          <p className="bull-kost">
            <b className="bull-kost1">Bull Kost</b>
          </p>
        </section>
        <div className="discover-your-ideal">
          Discover your ideal boarding house.
        </div>
        <button className="are-you-a-user-wrapper" onClick={onFrameButtonClick}>
          <b className="are-you-a">Are you a user?</b>
        </button>
        <button
          className="are-you-an-owner-wrapper"
          onClick={onFrameButton1Click}
        >
          <b className="are-you-an">Are you an owner?</b>
        </button>
      </main>
    </div>
  );
};

export default Frame19;
