import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame18.css";

const Frame18 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/frame-261");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  const onCreateAccountTextClick = useCallback(() => {
    navigate("/create-account-user");
  }, [navigate]);

  return (
    <div className="login-user-parent">
      <main className="login-user">
        <div className="rectangle-parent34" onClick={onGroupContainerClick}>
          <div className="group-child32" onClick={onRectangleClick} />
          <h3 className="login">{`Login `}</h3>
        </div>
        <img className="login-user-child" alt="" src="/group-2@2x.png" />
        <div className="or-sign-up">Or Sign up With</div>
        <div className="forgot-password2" onClick={onForgotPasswordClick}>
          Forgot Password ?
        </div>
        <div className="create-account1" onClick={onCreateAccountTextClick}>
          Create Account?
        </div>
        <h3 className="login1">Login</h3>
        <section className="undraw-login-re-4vu2-21">
          <img className="vector-icon58" alt="" src="/vector.svg" />
          <img className="vector-icon59" alt="" src="/vector.svg" />
          <img className="vector-icon60" alt="" src="/vector.svg" />
          <img className="vector-icon61" alt="" src="/vector.svg" />
          <img className="vector-icon62" alt="" src="/vector.svg" />
          <img className="vector-icon63" alt="" src="/vector.svg" />
          <img className="vector-icon64" alt="" src="/vector.svg" />
          <img className="vector-icon65" alt="" src="/vector.svg" />
          <img className="vector-icon66" alt="" src="/vector.svg" />
          <img className="vector-icon67" alt="" src="/vector.svg" />
          <img className="vector-icon68" alt="" src="/vector.svg" />
          <img className="vector-icon69" alt="" src="/vector.svg" />
          <img className="vector-icon70" alt="" src="/vector.svg" />
          <img className="vector-icon71" alt="" src="/vector.svg" />
          <img className="vector-icon72" alt="" src="/vector.svg" />
          <img className="vector-icon73" alt="" src="/vector.svg" />
          <img className="vector-icon74" alt="" src="/vector.svg" />
          <img className="vector-icon75" alt="" src="/vector.svg" />
          <img className="vector-icon76" alt="" src="/vector.svg" />
          <img className="vector-icon77" alt="" src="/vector.svg" />
          <img className="vector-icon78" alt="" src="/vector.svg" />
          <img className="vector-icon79" alt="" src="/vector.svg" />
          <img className="vector-icon80" alt="" src="/vector.svg" />
          <img className="vector-icon81" alt="" src="/vector.svg" />
          <img className="vector-icon82" alt="" src="/vector.svg" />
        </section>
        <input className="login-user-item" type="text" />
        <div className="username">Username</div>
        <input className="login-user-inner" type="text" />
        <div className="password1">Password</div>
      </main>
    </div>
  );
};

export default Frame18;
