import React from "react";

export function Overlay(props) {
  function closeOverlay() {
    props.setOverlayOpen(false);
  }
  return (
    <>
      {props.overlayOpen ? (
        <div className="overlay">
          <button className="closeBtn" onClick={closeOverlay}>
            x
          </button>
          <div className="content">{props.children}</div>
        </div>
      ) : null}
    </>
  );
}
