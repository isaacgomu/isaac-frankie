import Lorem10Block from "../components/Lorem10Block";
import "./scroll-animations.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeString from "./scrollIndicatorCodeString";

export default function scrollIndicator() {
  return (
    <div className="scroll-indicator-container">
      <div className="scroll-watcher"></div>
      <h2>Progress bar at the top!</h2>

      <div className="resources">
        <p>
          <em>
            Resource 1:{" "}
            <a href="https://scroll-driven-animations.style/demos/progress-bar/css/">
              scroll-driven-animations.style demo
            </a>
          </em>
        </p>
        <p>
          <em>
            Resource 2:{" "}
            <a href="https://www.youtube.com/watch?v=UmzFk68Bwdk">
              Kevin Powell - 00:30 to 02:44
            </a>
          </em>
        </p>
      </div>

      <div className="explanation-block">
        <p>
          On this page, when you scroll down you can watch the bar at the top
          track your scroll progress.
        </p>
      </div>
      <div className="lorem-block">
        <Lorem10Block />
        <Lorem10Block />
        <Lorem10Block />
        <Lorem10Block />
        <div className="explanation-block">
          <p>
            In this section, notice that the two containers below both have
            their own scroll progress bars, independent of each other.
          </p>
        </div>
        <div className="container-scroll-box">
          <div className="content-scroll-box parent">
            <div className="animation-scroll-indicator-one child"></div>

            <Lorem10Block />
            <Lorem10Block />
            <Lorem10Block />
          </div>
        </div>

        <div className="container-scope-scroll-box">
          <div className="with-scope-scroll-box">
            <Lorem10Block />
            <Lorem10Block />
            <Lorem10Block />
          </div>
          <div className="animation-scroll-indicator-two"></div>
        </div>

        <Lorem10Block />
        <Lorem10Block />
        <Lorem10Block />

        <div className="code-section">
          <p>Code for this demo:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="css">{codeString}</SyntaxHighlighter>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
