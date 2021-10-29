import React from "react";

function StopButton({session, stopSession}) {
    return (<button
    type="button"
    className="btn btn-secondary"
    data-testid="stop"
    title="Stop the session" 
    onClick={stopSession}
    disabled={!session}
  >
    <span className="oi oi-media-stop" />
  </button>)
  
}

export default StopButton;
