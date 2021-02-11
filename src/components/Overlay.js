import React from 'react'


export function Overlay(props) {
    function closeOverlay() {
      props.setOverlayOpen(false)
    }
    return (
      <>
        {props.overlayOpen ? (
          <div className="overlay">
            <div className="closeBtn" onClick={closeOverlay}>
              x
            </div>
            <div className="content">{props.children}</div>
          </div>
        ) : null}
      </>
    )
  }