import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material/";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Topbar({menuOpen, setMenuOpen}) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["AV:ID."],
      typeSpeed: 400,
    });
  }, []);

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span className="d">d</span><span className="avid" ref={textRef}></span>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 416 917 6604</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>davidagaybi@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  );
}
