import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingIntro = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hi, I am Nam (Dylan) Nguyen",
        1000,
        "I am a rising junior from Michigan State University",
        1000,
        "Fullstack Developer",
        1000,
        "Nice to meet you all!",
        100,
        "Let's contact!",
        500,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        color: "#2196F3",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingIntro;
