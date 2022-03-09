import React from "react";
import classNames from "../../utils/class-names";

export default function IncreaseButton({ session, increaseTimer }) {
    return (<button
        type="button"
        className={classNames({
            btn: true,
            "btn-secondary": session,
            "btn-success": !session
          })}
        data-testid="increase-focus"
        disabled={session}
        onClick={increaseTimer}
    >
        <span className="oi oi-plus" />
    </button>)
}
