const codeString = `
/* --- --- --- */
/* Add the keyframes */
/* --- --- --- */
@keyframes move {
    to {
      /* Move horizontally so that right edge is aligned against the viewport */
      transform: translateX(calc(-100% + 100vw));
    }
  }
/* --- --- --- */
/* Basic styling */
/* --- --- --- */
  .scrollh1 {
    font-size: 5rem;
    line-height: 1;
    font-weight: 800;
    margin-bottom: 1rem;
    position: absolute;
    top: 10vw;
    left: 10vw;
    z-index: 4;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .scrollh1 span {
    display: block;
  }
  
  @media (max-width: 768px) {
    .scrollh1 {
      font-size: 16vw;
    }
  }
  
  .scrollh2 {
    font-size: 2rem;
    max-width: 400px;
  }
  
  section:not(#sectionPin) {
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 50px 10vw;
    margin: auto;
    place-items: center;
  }
  /* --- --- --- */
  /* This is holding the divs that hold our content and is 500vh tall */
  /* --- --- --- */
  #sectionPin {
    height: 500vh;
    overflow: visible;
    display: flex;
    background: var(--primary-color);
    color: var(--bg-color);
    view-timeline-name: --section-pin-tl;
    view-timeline-axis: block;
    position: relative;
  }
/* --- --- --- */
/* This holds our content, which is animated. */
/* --- --- --- */
  .pin-wrap {
    height: 100vh;
    width: 250vmax;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 10vw;
    /* Hook animation */
    will-change: transform;
    animation: linear move forwards;
  
    /* Link animation to view-timeline */
    animation-timeline: --section-pin-tl;
    animation-range: contain 0% contain 100%;
  }
  
  .pin-wrap > * {
    min-width: 60vw;
    padding: 0 5vw;
  }
  /* --- --- --- */
/* This sticks the pin-wrap div to the top of the screen */
/* --- --- --- */
  .pin-wrap-sticky {
    /* Stick to Top */
    height: 100vh;
    width: 100vw;
    position: sticky;
    top: 0;
    overflow-x: hidden;
  }
  /* --- --- --- */
/* This is for the markers showing how the illusion works */
/* --- --- --- */
  .marker {
    position: absolute;
    z-index: 100;
    left: 40px;
    height: 50px;
    width: 50px;
    color: white;
  }
  
  .marker.one {
    top: 20%;
  }
  
  .marker.two {
    top: 40%;
  }
  
  .marker.three {
    top: 60%;
  }
  
  .marker.four {
    top: 80%;
  }
`;

export default codeString;
