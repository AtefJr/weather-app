import React from "react";


export const Footer = () => {
  

  return (
    <footer className="page-footer">
      <div className="container">
        <small>
          Made with <span>❤</span> by{" "}
          <a
            href="https://www.linkedin.com/in/matefkhalaf/"
            rel="noreferrer"
            target="_blank"
          >
            Mohamed Khalaf
          </a>
          <br></br>
          <div>
            Using
            <a
              href="https://developer.accuweather.com/apis"
              rel="noreferrer"
              target="_blank"
            >
              <div className="accu-link">AccuWeather API</div>
            </a>
          </div>
        </small>
      </div>
    </footer>
  );
};
