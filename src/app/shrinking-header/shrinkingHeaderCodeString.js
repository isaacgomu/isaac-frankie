const codeString = `
/*  --- --- --- --- */
/* This is the 'whole page' */
/*  --- --- --- --- */
/* These classes are just for decoration and display */
.page-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 3rem;
}
.explanation-block {
  display: grid;
  font-weight: 800;
  place-items: center;
}
.explanation-block p {
  width: 75%;
}

/*  --- --- --- --- */
/* These are the header elements which are animated: */
/*  --- --- --- --- */
.info {
  display: flex;
  place-items: center;
  padding-left: 7rem;
  gap: 5rem;
  height: 12rem;

  animation: adjust-info linear both;
}

.info h2 {
  animation: shrink-name linear both;
}

header {
  position: sticky;
  top: 0;
  margin-left: 2rem;
  height: 8rem;
  width: 100%;
  background-color: white;

  animation: add-shadow linear both;
}

.bg {
  position: absolute;
  inset: 0;
  top: auto;
  height: 15rem;
  background: linear-gradient(to bottom, #fff6 20%, #fff 100%),
    url("/70sRainbowCornerBurst.webp") repeat-x 50% 100% / 650px auto;
  z-index: -1;

  animation: move-and-fade-background linear both;
}

/*  --- --- --- --- */
/* And this is the crucial selector which tells the above elements to animate on scroll. Only two lines!! */
/*  --- --- --- --- */
.info,
h2,
header,
.bg {
  animation-timeline: scroll();
  animation-range: 50px 500px;
}

.code-section {
  border: 2px solid black;
  max-height: 500px;
  overflow-y: scroll;
}

/*  --- --- --- --- */
/* These are our animations the scroll is attached to */
/*  --- --- --- --- */
@keyframes adjust-info {
  to {
    grid-template-columns: 4em 1fr;
    gap: 10rem;
    height: 4.75rem;
  }
}
@keyframes shrink-name {
  to {
    font-size: 1.5rem;
  }
}
@keyframes add-shadow {
  to {
    height: 4rem;
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.6);
    border-top: 3px solid rgba(140, 0, 255, 0.6);
  }
}
@keyframes move-button {
  to {
    translate: 0% 40%;
  }
}
@keyframes move-and-fade-background {
  to {
    translate: 0% -5%;
    scale-y: 0.96;
    opacity: 0.7;
  }
}

`;

export default codeString;
