import React from "react";
import { FiPlus } from "react-icons/fi";
export default function SinglePortfolio(props) {
  const { portfolioImg, title, link, video } = props;
  return (
    <div className="grid">
      <div className="col px-sm-2 mb-3">
        <a
          href={link}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textDecoration: "none",
          }}
        >
          <p
            style={{
              borderBottom: "1px solid white",
              width: "max-content",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            {title}
          </p>
        </a>
        {video && (
          <a
            href={video}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                width: "max-content",
                paddingLeft: "5%",
                paddingRight: "5%",
              }}
            >
              - Video Walk through Link -
            </p>
          </a>
        )}
        <div className="portfolio-wrapper">
          <div className="portfolio-thumb">
            <img
              src={portfolioImg}
              style={{ maxHeight: "200px" }}
              alt={title}
            />
          </div>
          <a href={portfolioImg} data-attribute="SRL">
            <div
              className="overlay"
              style={{ height: "60%", textAlign: "center" }}
            >
              <img className="d-none" src={portfolioImg} alt={title} />
              <i>
                <FiPlus />
                <p>Click to enlarge</p>
              </i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
