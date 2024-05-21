import Lorem10Block from "../components/Lorem10Block";
import "./shrinking-header.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeString from "./shrinkingHeaderCodeString";

export default function ShrinkingHeaderPage() {
  return (
    <div className="shrinking-header-container">
      <header>
        <div className="limited">
          <div className="bg"></div>
          <div className="info">
            <div>
              <h2>Frankie and Isaacs...</h2>
            </div>
            <div>
              <h2>Amazing shrinking headers page!</h2>
            </div>
          </div>
        </div>
      </header>

      <div className="page-content">
        {" "}
        <p>
          <em>
            Resource 1:{" "}
            <a href="https://scroll-driven-animations.style/demos/shrinking-header-shadow/css/">
              scroll-driven-animations.style demo
            </a>
          </em>
        </p>
        <div className="explanation-block">
          <p>
            On this page, you&apos;ll see that when you scroll down, the header
            at the top shrinks in size, and the elements within the header have
            their own fancy transformations.
          </p>
        </div>
        <div className="lorem-block">
          <Lorem10Block />
          <Lorem10Block />
          <Lorem10Block />
          <Lorem10Block />
          <Lorem10Block />
        </div>
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
