import Lorem10Block from "../components/Lorem10Block";
import "./scroll-animations.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeString from "./scrollIndicatorCodeString";

export default function scrollIndicator() {
  return (
    <div className="scroll-indicator-container">
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
          <a href="https://scroll-driven-animations.style/demos/progress-bar/css/">
            Kevin Powell - 00:30 to 02:44
          </a>
        </em>
      </p>
      <div className="scroll-watcher"></div>
      <Lorem10Block />
      <Lorem10Block />
      <Lorem10Block />
      <Lorem10Block />
      <div className="container-scroll-box">
        <div className="content-scroll-box">
          <div className="animation-scroll-indicator"></div>

          <Lorem10Block />
          <Lorem10Block />
          <Lorem10Block />
        </div>
      </div>
      <div className="container-scroll-box">
        <div className="content-scroll-box">
          <div className="animation-scroll-indicator"></div>

          <Lorem10Block />
          <Lorem10Block />
          <Lorem10Block />
        </div>
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
  );
}
