import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingIntro = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hey, I'm Nam Nguyen",
        2000,
        "CS Junior from Michigan State University",
        2000,
        "Fullstack Developer",
        2000,
        "Nice to meet y'all!",
        2000,
        "Let's link up",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        color: "#fff",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5)",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingIntro;
