import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";
import Div11 from "./Div11";

class App extends Component {
  render() {
    return (
      <>
        <Link
          to="div7"
          spy={false}
          offset={50}
          smooth
          duration={1000}
          style={{ background: "pink", cursor: "pointer" }}
        >
          Scroll To
        </Link>
        <div
          id="div1"
          style={{ height: "100px", background: "red", textAlign: "center" }}
        >
          Div1
        </div>
        <div
          id="div2"
          style={{ height: "100px", background: "yellow", textAlign: "center" }}
        >
          Div2
        </div>
        <div
          id="div3"
          style={{ height: "100px", background: "red", textAlign: "center" }}
        >
          Div3
        </div>
        <div
          id="div4"
          style={{ height: "100px", background: "yellow", textAlign: "center" }}
        >
          Div4
        </div>
        <div
          id="div5"
          style={{ height: "100px", background: "red", textAlign: "center" }}
        >
          Div5
        </div>
        <div
          id="div6"
          style={{ height: "100px", background: "yellow", textAlign: "center" }}
        >
          Div6
        </div>
        <button onClick={() => scroll.scrollToTop()}>Top</button>
        <button onClick={() => scroll.scrollToBottom()}>Bottom</button>
        <div
          id="div7"
          style={{ height: "100px", background: "red", textAlign: "center" }}
        >
          Div7
        </div>
        <div
          id="div8"
          style={{ height: "100px", background: "yellow", textAlign: "center" }}
        >
          Div8
        </div>
        <div
          id="div9"
          style={{ height: "100px", background: "red", textAlign: "center" }}
        >
          Div9
        </div>
        <div
          id="div10"
          style={{ height: "100px", background: "yellow", textAlign: "center" }}
        >
          Div10
        </div>
        <Div11 />
      </>
    );
  }
}

export default App;
