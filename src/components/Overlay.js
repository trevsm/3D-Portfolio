import React from "react";
import Icon from "./CodeIcon";
import "./CodeIcon.css";

export function Overlay(props) {
  function closeOverlay() {
    props.setOverlayOpen(false);
  }
  return (
    <>
      {props.overlayOpen ? (
        <div className="overlay">
          <button
            className="closeBtn"
            onClick={closeOverlay}
            onBlur={closeOverlay}
          >
            &times;
          </button>
          <div className="content">{props.children}</div>
        </div>
      ) : null}
      <a
        className="code-icon"
        href="https://github.com/trevsm/portfolio"
        target="new"
        data-tip="React-tooltip"
      >
        <Icon />
      </a>
    </>
  );
}
