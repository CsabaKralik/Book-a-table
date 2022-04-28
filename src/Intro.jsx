import React from "react";
import "./Intro.css";
import introImg from "./images/Intro.jpg";
function Intro() {
  return (
    <div id="Intro" className="intro">
      <h3>The origin of pizza</h3>
      <div className="inIntro">
        <div className="img-container">
          <img src={introImg} alt="pizzeria introduction" />
        </div>
        <p>
          So, about the origin of pizza…
          <br />
          <br />
          The word “pizza” is thought to have come from the Latin word pinsa,
          meaning flatbread (although there is much debate about the origin of
          the word).
          <br />
          A legend suggests that Roman soldiers gained a taste for Jewish
          Matzoth while stationed in Roman-occupied Palestine and developed a
          similar food after returning home. However, a recent archeological
          discovery has found a preserved Bronze Age pizza in the Veneto region.
          <br />
          By the Middle Ages, these early pizzas started to take on a more
          modern look and taste.
        </p>
      </div>
    </div>
  );
}

export default Intro;
