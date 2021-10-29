import React from "react";
import { minutesToDuration } from "../utils/duration";

function DurationAdjuster({label, duration, increaseTimer, decreaseTimer, session}) {
   if (label === "Focus") {
    return (<div className="col">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/*display the current focus session duration */}
        Focus Duration: {minutesToDuration(duration)}
      </span>
      <div className="input-group-append">
        {/*Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          disabled={session}
          onClick={decreaseTimer}
        >
          <span className="oi oi-minus" />
        </button>
        {/*Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          disabled={session}
          onClick={increaseTimer}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  </div>

    )
   } else {
    return (<div className="col">
    <div className="float-right">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/*display the current break session duration */}
          Break Duration: {minutesToDuration(duration)}
        </span>
        <div className="input-group-append">
          {/*Implement decreasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-break"
            disabled={session}
            onClick={decreaseTimer}
          >
            <span className="oi oi-minus" />
          </button>
          {/*Implement increasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-break"
            disabled={session}
            onClick={increaseTimer}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  </div>


    )
   }
}

export default DurationAdjuster;