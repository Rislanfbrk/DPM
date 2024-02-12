import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame19 from "./pages/Frame19";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Frame9 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";
import Frame11 from "./pages/Frame11";
import Frame12 from "./pages/Frame12";
import Frame13 from "./pages/Frame13";
import Frame14 from "./pages/Frame14";
import Frame15 from "./pages/Frame15";
import Frame16 from "./pages/Frame16";
import Frame17 from "./pages/Frame17";
import Frame18 from "./pages/Frame18";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-277":
        title = "";
        metaDescription = "";
        break;
      case "/frame-276":
        title = "";
        metaDescription = "";
        break;
      case "/frame-275":
        title = "";
        metaDescription = "";
        break;
      case "/frame-274":
        title = "";
        metaDescription = "";
        break;
      case "/frame-273":
        title = "";
        metaDescription = "";
        break;
      case "/frame-272":
        title = "";
        metaDescription = "";
        break;
      case "/frame-271":
        title = "";
        metaDescription = "";
        break;
      case "/frame-270":
        title = "";
        metaDescription = "";
        break;
      case "/frame-269":
        title = "";
        metaDescription = "";
        break;
      case "/frame-268":
        title = "";
        metaDescription = "";
        break;
      case "/frame-267":
        title = "";
        metaDescription = "";
        break;
      case "/frame-266":
        title = "";
        metaDescription = "";
        break;
      case "/frame-265":
        title = "";
        metaDescription = "";
        break;
      case "/frame-264":
        title = "";
        metaDescription = "";
        break;
      case "/frame-263":
        title = "";
        metaDescription = "";
        break;
      case "/frame-262":
        title = "";
        metaDescription = "";
        break;
      case "/frame-261":
        title = "";
        metaDescription = "";
        break;
      case "/frame-260":
        title = "";
        metaDescription = "";
        break;
      case "/frame-259":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame19 />} />
      <Route path="/frame-277" element={<Frame />} />
      <Route path="/frame-276" element={<Frame1 />} />
      <Route path="/frame-275" element={<Frame2 />} />
      <Route path="/frame-274" element={<Frame3 />} />
      <Route path="/frame-273" element={<Frame4 />} />
      <Route path="/frame-272" element={<Frame5 />} />
      <Route path="/frame-271" element={<Frame6 />} />
      <Route path="/frame-270" element={<Frame7 />} />
      <Route path="/frame-269" element={<Frame8 />} />
      <Route path="/frame-268" element={<Frame9 />} />
      <Route path="/frame-267" element={<Frame10 />} />
      <Route path="/frame-266" element={<Frame11 />} />
      <Route path="/frame-265" element={<Frame12 />} />
      <Route path="/frame-264" element={<Frame13 />} />
      <Route path="/frame-263" element={<Frame14 />} />
      <Route path="/frame-262" element={<Frame15 />} />
      <Route path="/frame-261" element={<Frame16 />} />
      <Route path="/frame-260" element={<Frame17 />} />
      <Route path="/frame-259" element={<Frame18 />} />
    </Routes>
  );
}
export default App;
