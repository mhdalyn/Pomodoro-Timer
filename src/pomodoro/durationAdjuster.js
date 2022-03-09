import React from "react";
import { minutesToDuration } from "../utils/duration";
import DecreaseButton from "./buttons/decreaseButton";
import IncreaseButton from "./buttons/increaseButton";

function DurationAdjuster({label, duration, increaseTimer, decreaseTimer, session}) {
   if (label === "Focus") {
    return (<div className="col">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/*display the current focus session duration */}
        Focus Duration: {minutesToDuration(duration)}
      </span>
      <div className="input-group-append">
        <DecreaseButton session={session} decreaseTimer={decreaseTimer} />
        <IncreaseButton session={session} increaseTimer={increaseTimer} />
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
          <DecreaseButton session={session} decreaseTimer={decreaseTimer} />
          <IncreaseButton session={session} increaseTimer={increaseTimer} />
        </div>
      </div>
    </div>
  </div>)
   }
}

export default DurationAdjuster;