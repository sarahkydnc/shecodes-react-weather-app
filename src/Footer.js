import React from "react";

function Footer() {
  return (
    <div>
      <p className="coded-by text-middle mt-5">
        This app was created by {""}
        <a
          href="https://www.sarahkaydence.com"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Sarah Kaydence
        </a>
        ⚡️ | Open-sourced on {""}
        <a
          href="https://github.com/sarahkydnc/shecodes-react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          GitHub
        </a>{" "}
        {""}| Hosted on {""}
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Netlify
        </a>{" "}
        {""}| Weather icons by {""}
        <a
          href="https://basmilius.github.io/weather-icons/index-line.html"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Basmilius
        </a>
      </p>
    </div>
  );
}

export default Footer;
