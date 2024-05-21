import Lorem10Block from "../components/Lorem10Block";
import "./scroll-animations.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeString from "./scrollIndicatorCodeString";

export default function scrollIndicator() {
  return (
    <div className="scroll-indicator-container">
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
