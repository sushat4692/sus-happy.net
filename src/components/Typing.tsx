import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";

type Props = {
  string: string
  duration: number
  callback?: Function,
  start?: boolean
}
type State = {
  display: string
}

const sleepTexts: {[key: string]: number} = {
  "?": 6,
  ".": 5,
  ",": 3,
  " ": 2
};
const initialState: State = {display: ""};

const reducer = (_state: State, next: string) => {
  return {display: next};
};

const Typing: React.FC<Props> = ({string, duration, callback, start}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let displayLength = 0;

    const typeAnimation = () => {
      if (displayLength >= string.length) {
        if (callback) {
          callback();
        }
        return;
      }

      displayLength += 1;
      dispatch(string.substr(0, displayLength));

      let ratio = 1;
      const lastText = string.substr(displayLength-1, 1);
      if (Object.prototype.hasOwnProperty.call(sleepTexts, lastText)) {
        ratio = sleepTexts[lastText];
      }

      setTimeout(typeAnimation, duration * ratio);
    };

    if (start) {
      typeAnimation();
    }
  }, [string, duration, start]);

  return <>
    {state.display}
    <i className="typing-icon"></i>
  </>;
};

Typing.propTypes = {
  string: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  callback: PropTypes.func,
  start: PropTypes.bool
};

Typing.defaultProps = {
  start: true
};

export default Typing;
