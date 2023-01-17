import React from "react";
import CV from "../../assets/CV.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        Let's Talk
      </a>
      <a
        href="https://www.linkedin.com/in/ervin-kacar-bbb801223/"
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default CTA;
