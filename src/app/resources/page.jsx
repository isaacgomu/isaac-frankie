import Link from "next/link";

export default function Resources() {
  return (
    <div>
      <div className="resourcediv">
        <h1>These are the resources we used for this project!</h1>
      </div>

      <div className="listdiv">
        <div className="list">
          <ul>
            <li>
              <Link
                href="https://developer.chrome.com/docs/css-ui/scroll-driven-animations"
                className="resourceLink"
              >
                https://developer.chrome.com/docs/css-ui/scroll-driven-animations
              </Link>
            </li>
            <li>
              <Link
                href="https://tympanus.net/codrops/2024/01/17/a-practical-introduction-to-scroll-driven-animations-with-css-scroll-and-view/"
                className="resourceLink"
              >
                https://tympanus.net/codrops/2024/01/17/a-practical-introduction-to-scroll-driven-animations-with-css-scroll-and-view/
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/watch?v=biOMz4puGt8"
                className="resourceLink"
              >
                https://www.youtube.com/watch?v=biOMz4puGt8
              </Link>
            </li>
            <li>
              <Link
                href="https://scroll-driven-animations.style/"
                className="resourceLink"
              >
                https://scroll-driven-animations.style/
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/watch?v=UmzFk68Bwdk"
                className="resourceLink"
              >
                https://www.youtube.com/watch?v=UmzFk68Bwdk
              </Link>
            </li>
            <li>
              <Link
                href="https://developer.mozilla.org/en-US/blog/scroll-progress-animations-in-css/"
                className="resourceLink"
              >
                https://developer.mozilla.org/en-US/blog/scroll-progress-animations-in-css/
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICM3ttukz9x5LCNOHfWBVnn&si=YT0LfeggIeKpk8tr"
                className="resourceLink"
              >
                https://www.youtube.com/playlist?list=PLNYkxOF6rcICM3ttukz9x5LCNOHfWBVnn&si=YT0LfeggIeKpk8tr
              </Link>
            </li>
            <li>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline"
                className="resourceLink"
              >
                https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
