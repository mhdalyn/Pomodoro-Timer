import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Session ({session, duration}) {

    if (session === null) {
        return null;
    } else {
      const elapsedTime = duration*60-session.timeRemaining;
      const progress = ((elapsedTime / (duration*60)) * 100).toFixed();
      const progressPercent = progress + "%"
    return (<><div className="row mb-2">
    <div className="col">
      {/*current session (Focusing or On Break) total duration */}
      <h2 data-testid="session-title">
        {session.label} for {minutesToDuration(duration)} minutes
      </h2>
      {/*format the time remaining in the current session */}
      <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(session.timeRemaining)} remaining
      </p>
    </div>
  </div>
          <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: progressPercent }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
  </>)}
}
export default Session;