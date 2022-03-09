import React from "react";
import classNames from "../../utils/class-names";

export default function StopButton({ session, stopSession }) {
  return (<button
    type="button"
    className={classNames({
      btn: true,
      "btn-secondary": !session,
      "btn-danger": session
    })}
    data-testid="stop"
    title="Stop the session"
    onClick={stopSession}
    disabled={!session}
    >
    <span className="oi oi-media-stop" />
  </button>)
}

