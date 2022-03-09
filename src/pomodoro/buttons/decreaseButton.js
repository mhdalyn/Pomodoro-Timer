import React from "react";
import classNames from "../../utils/class-names";

export default function DecreaseButton({ session, decreaseTimer }) {
    return (<button
        type="button"
        className={classNames({
            btn: true,
            "btn-secondary": session,
            "btn-warning": !session
          })}
        data-testid="decrease-break"
        disabled={session}
        onClick={decreaseTimer}
    >
        <span className="oi oi-minus" />
    </button>)
}
