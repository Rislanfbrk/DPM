import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/login-user");
  }, [navigate]);

  return (
    <div className="forgot-password-parent">
      <main className="forgot-password">
        <img
          className="vuesaxbulkarrow-square-left-icon2"
          alt=""
          src="/vuesaxbulkarrowsquareleft@2x.png"
          onClick={onVuesaxbulkarrowSquareLeftIconClick}
        />
        <h2 className="forgot-password1">Forgot Password</h2>
        <input
          className="forgot-password-child"
          placeholder="Enter the email or phone number"
          type="text"
        />
        <section className="undraw-forgot-password-re-hxwm">
          <img className="vector-icon7" alt="" src="/vector.svg" />
          <img className="vector-icon8" alt="" src="/vector.svg" />
          <img className="vector-icon9" alt="" src="/vector.svg" />
          <img className="vector-icon10" alt="" src="/vector.svg" />
          <img className="vector-icon11" alt="" src="/vector.svg" />
          <img className="vector-icon12" alt="" src="/vector.svg" />
          <img className="vector-icon13" alt="" src="/vector.svg" />
          <img className="vector-icon14" alt="" src="/vector.svg" />
          <img className="vector-icon15" alt="" src="/vector.svg" />
          <img className="vector-icon16" alt="" src="/vector.svg" />
          <img className="vector-icon17" alt="" src="/vector.svg" />
          <img className="vector-icon18" alt="" src="/vector.svg" />
          <img className="vector-icon19" alt="" src="/vector.svg" />
          <img
            className="ab6171fa-7d69-4734-b81c-8dff60-icon"
            alt=""
            src="/ab6171fa7d694734b81c8dff60f9761b.svg"
          />
          <img className="vector-icon20" alt="" src="/vector.svg" />
          <img className="vector-icon21" alt="" src="/vector.svg" />
          <img className="vector-icon22" alt="" src="/vector.svg" />
          <img className="vector-icon23" alt="" src="/vector.svg" />
          <img className="vector-icon24" alt="" src="/vector.svg" />
          <img className="vector-icon25" alt="" src="/vector.svg" />
          <img className="vector-icon26" alt="" src="/vector.svg" />
          <img className="vector-icon27" alt="" src="/vector.svg" />
          <img className="vector-icon28" alt="" src="/vector.svg" />
          <img className="vector-icon29" alt="" src="/vector.svg" />
          <img className="vector-icon30" alt="" src="/vector.svg" />
          <img className="vector-icon31" alt="" src="/vector.svg" />
          <img className="vector-icon32" alt="" src="/vector.svg" />
        </section>
        <div className="enter-email-or">
          Enter email or phone number, we will send you the OTP.
        </div>
        <button className="group-button">
          <div className="group-child9" />
          <div className="continue">Continue</div>
        </button>
      </main>
    </div>
  );
};

export default Frame1;
