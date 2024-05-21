"use client";

import { useState } from "react";
import "./horizontal-scroll-animation.css";

export default function HorizontalScroll() {
  const [showMarkers, setShowMarkers] = useState(true);

  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
  };
  return (
    <div className="container">
      <section>
        <h1>
          The scrolling section below contains divs with the classes
          &quot;pin-wrap-sticky&quot; and &quot;pin-wrap&quot;
        </h1>
        <button onClick={toggleMarkers}>
          {showMarkers ? "Hide Markers" : "Show Markers"}
        </button>
      </section>
      <section id="sectionPin">
        {showMarkers && (
          <>
            <div className="marker zero">
              <p>0vh</p>
            </div>
            <div className="marker one">
              <p>100vh</p>
            </div>
            <div className="marker two">
              <p>200vh</p>
            </div>
            <div className="marker three">
              <p>300vh</p>
            </div>
            <div className="marker four">
              <p>400vh</p>
            </div>
          </>
        )}

        <div className="pin-wrap-sticky">
          <div className="pin-wrap">
            <h2>
              This is all within the section &quot;sectionPin&quot;. This
              section has a height of 500vh, which allows it to be scrolled on.
            </h2>
            <h2>
              Within the section is a div with the class of
              &quot;pin-wrap&quot;. This div has a width of 250vh, and is
              animated with keyframes that move the element horizontally so
              it&apos;s right edge aligns with the viewers right edge.
            </h2>
            <h2>
              The &quot;pin-wrap&quot; div is enclosed within the div of
              &quot;pin-wrap-sticky&quot;, which has a width and height of 100vh
              but with the position of &quot;sticky&quot;, which means it sticks
              to the top of the page when scrolling, stopping the user from
              scrolling horizontally.
            </h2>
            <h2>
              The way that the pin-wrap moves is by adding an animation to the
              pin-wrap div to make it move. This animation&apos;s timeline is
              based on how much the sectionPin has come into view through the
              use of &quot;view-timeline&quot;, which is connected to pin-wrap.
            </h2>
          </div>
        </div>
      </section>
      <section>
        <p>Goodbye</p>
      </section>
    </div>
  );
}
