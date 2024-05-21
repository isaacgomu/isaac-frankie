const codeString = `
/*  --- --- --- --- */
/* This is the 'whole page' */
/*  --- --- --- --- */
.scroll-indicator-container {
  padding: 3rem;
}

/*  --- --- --- --- */
/* This is the bar at the top of our page */
/*  --- --- --- --- */
.scroll-watcher {
  height: 10px;
  /* margin just to bring it in from our nav bar */
  margin-left: 2rem;

  /* position:fixed keeps it at the top of our viewport when we scroll */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;

  background-color: tomato; /* naturally */

  /* 100 viewport width, so it spans the screen. You might use 100% if its within a container */
  width: 100vw;
  /* To start it from the left, otherwise it goes from the center */
  transform-origin: left;
  /* Scale is the thing we're animating */
  scale: 0.005 1;
  /* animation is linked to the 'keyframes' below. Timeline is watching the page scroll */
  animation: scroll-watcher linear;
  animation-timeline: scroll();
}

/*  --- --- --- --- */
/* This is holding both our content box and our scroll indicator */
/*  --- --- --- --- */
.container-scroll-box {
  border: 2px solid black;
  position: relative;
}
/*  --- --- --- --- */
/* This is holding the lorem ipsum */
/*  --- --- --- --- */
.content-scroll-box {
  height: 200px;
  padding-left: 1.5rem;
  overflow-y: scroll;
  scroll-timeline: --lorem-scroll block;
}
/*  --- --- --- --- */
/* This is holding both our content box and our scroll indicator */
/*  --- --- --- --- */

.animation-scroll-indicator {
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 900;

  background-color: tomato;

  width: 1rem;
  height: 100%;

  transform-origin: bottom;
  scale: 1 0.005;

  animation: scroll-watcher linear;
  animation-timeline: --lorem-scroll;
}

.code-section {
  border: 2px solid black;
  max-height: 500px;
  overflow-y: scroll;
}

@keyframes scroll-watcher {
  to {
    scale: 1 1;
  }
}

  `;

export default codeString;