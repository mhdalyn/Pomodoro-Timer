import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Session from "./session";
import StopButton from "./buttons/stopButton";
import DurationAdjuster from "./durationAdjuster";
import PlayPause from "./buttons/playButton";
import { nextTick, nextSession } from "../utils/timerUtils";

export default function Pomodoro() {

  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  // Allow the user to adjust the focus and break duration.
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  function increaseFocus() {
    setFocusDuration(Math.min(focusDuration+5,60))
  }
  
  function decreaseFocus() {
    setFocusDuration(Math.max(focusDuration-5,5))
  }
  
  function increaseBreak() {
    setBreakDuration(Math.min(breakDuration+1,15))
  }
  
  function decreaseBreak() {
    setBreakDuration(Math.max(breakDuration-1,1))
  }

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  function stopSession() {
    setSession(null);
    setIsTimerRunning(false);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <DurationAdjuster label="Focus" duration={focusDuration} increaseTimer={increaseFocus} decreaseTimer={decreaseFocus} session={session} />
        <DurationAdjuster label="Break" duration={breakDuration} increaseTimer={increaseBreak} decreaseTimer={decreaseBreak} session={session} />
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <PlayPause playPause={playPause} isTimerRunning={isTimerRunning} />
            <StopButton session={session} stopSession={stopSession} />
          </div>
        </div>
      </div>
      <div>
        <Session
          session={session}
          duration={
            session?.label === "Focusing" ? focusDuration : breakDuration
          }
        />
      </div>
    </div>
  );
}