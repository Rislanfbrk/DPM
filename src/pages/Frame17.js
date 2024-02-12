import { useCallback } from "react";
import Property1Default3 from "../components/Property1Default3";
import { useNavigate } from "react-router-dom";
import "./Frame17.css";

const Frame17 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-user");
  }, [navigate]);

  return (
    <div className="create-account-user-parent">
      <main className="create-account-user">
        <h3 className="create-account">Create Account</h3>
        <section className="undraw-login-re-4vu2-2">
          <img className="vector-icon33" alt="" src="/vector.svg" />
          <img className="vector-icon34" alt="" src="/vector.svg" />
          <img className="vector-icon35" alt="" src="/vector.svg" />
          <img className="vector-icon36" alt="" src="/vector.svg" />
          <img className="vector-icon37" alt="" src="/vector.svg" />
          <img className="vector-icon38" alt="" src="/vector.svg" />
          <img className="vector-icon39" alt="" src="/vector.svg" />
          <img className="vector-icon40" alt="" src="/vector.svg" />
          <img className="vector-icon41" alt="" src="/vector.svg" />
          <img className="vector-icon42" alt="" src="/vector.svg" />
          <img className="vector-icon43" alt="" src="/vector.svg" />
          <img className="vector-icon44" alt="" src="/vector.svg" />
          <img className="vector-icon45" alt="" src="/vector.svg" />
          <img className="vector-icon46" alt="" src="/vector.svg" />
          <img className="vector-icon47" alt="" src="/vector.svg" />
          <img className="vector-icon48" alt="" src="/vector.svg" />
          <img className="vector-icon49" alt="" src="/vector.svg" />
          <img className="vector-icon50" alt="" src="/vector.svg" />
          <img className="vector-icon51" alt="" src="/vector.svg" />
          <img className="vector-icon52" alt="" src="/vector.svg" />
          <img className="vector-icon53" alt="" src="/vector.svg" />
          <img className="vector-icon54" alt="" src="/vector.svg" />
          <img className="vector-icon55" alt="" src="/vector.svg" />
          <img className="vector-icon56" alt="" src="/vector.svg" />
          <img className="vector-icon57" alt="" src="/vector.svg" />
        </section>
        <section className="erorr-signup-parent">
          <Property1Default3
            mdiuserCircleOutline="/mdiusercircleoutline@2x.png"
            showMdiUserCircleOutline
            nameFontFamily="Poppins"
          />
          <div className="icoutline-email-parent">
            <img
              className="icoutline-email-icon"
              alt=""
              src="/icoutlineemail@2x.png"
            />
            <div className="email-address2">Email Address</div>
          </div>
          <div className="group-parent4">
            <div className="mdipassword-outline-parent">
              <img
                className="mdipassword-outline-icon"
                alt=""
                src="/mdipasswordoutline@2x.png"
              />
              <div className="password">Password</div>
            </div>
            <img
              className="icoutline-email-icon"
              alt=""
              src="/mdihideoutline@2x.png"
            />
          </div>
          <div className="group-parent4">
            <div className="mdipassword-outline-group">
              <img
                className="mdipassword-outline-icon"
                alt=""
                src="/mdipasswordoutline@2x.png"
              />
              <div className="password">Confirm Password</div>
            </div>
            <img
              className="icoutline-email-icon"
              alt=""
              src="/mdihideoutline@2x.png"
            />
          </div>
          <div className="material-symbolscheck-box-parent">
            <img
              className="icoutline-email-icon"
              alt=""
              src="/materialsymbolscheckbox@2x.png"
            />
            <div className="by-registering-you-container">
              <span>{`By registering, you are agreeing with our `}</span>
              <span className="terms-of-use">Terms of Use</span>
              <span>{` and `}</span>
              <span className="terms-of-use">Privacy Policy</span>
            </div>
          </div>
        </section>
        <div className="register-wrapper" onClick={onFrameContainerClick}>
          <h3 className="register">Register</h3>
        </div>
        <div className="already-have-an" onClick={onAlreadyHaveAnClick}>
          Already have an account?
        </div>
      </main>
    </div>
  );
};

export default Frame17;
