import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingIntro = () => {
  return (
    <>
    <p className="sr-only">CS major from Michigan State University. Fullstack Software Engineer.</p>
    <p aria-hidden="true" className="hidden min-h-40 text-2xl leading-relaxed drop-shadow-lg motion-reduce:block sm:min-h-28 sm:text-3xl">Fullstack Developer</p>
    <TypeAnimation
      sequence={[
        "CS major from Michigan State University",
        1200,
        "Fullstack Software Engineer",
        1200,
        "Nice to meet y'all!",
        1200,
        "Let's link up!",
        1200,
      ]}
      wrapper="span"
      speed={50}
      className="inline-block min-h-40 text-2xl leading-relaxed text-white drop-shadow-lg motion-reduce:hidden sm:min-h-28 sm:text-3xl"
      aria-hidden="true"
      repeat={Infinity}
    />
    </>
  );
};

export default TypingIntro;
